---
title: Advanced Logging
layout: default
parent: Monitoring
nav_order: 1
---

# Logging Azure SQL Databases' Index Fragmentation Data into Azure Log Analytics

---

<details open markdown="block">
  <summary>Tabla de Contenidos</summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Introduction to Index Fragmentation in Azure SQL Databases

**Index fragmentation** occurs when data within an index is stored inefficiently, leading to both **logical** and **physical fragmentation**. **Logical fragmentation** refers to the disordered arrangement of index pages, while **physical fragmentation** involves scattered data across the disk or storage medium. Both types of fragmentation increase the read operations required to retrieve data, resulting in slower query performance. As fragmentation builds up, it becomes essential to **monitor and manage fragmentation** to maintain optimal database performance, especially in environments with high volumes of data operations.

**SQL PaaS (Platform as a Service)** environments, such as [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/), simplify database management by automating tasks like scaling, security, and backups. This makes them a preferred choice for dynamic, high-volume applications. However, with frequent data insertions, updates, and deletions, SQL PaaS databases are prone to index fragmentation. Unlike on-premises databases, where administrators might address fragmentation manually, **PaaS environments benefit from automated monitoring** solutions due to their scale and dynamic workloads. Follow the link for more info on [Azure SQL Database management features](https://learn.microsoft.com/en-us/azure/azure-sql/).

## Roles mix: fragmentation data from the SQL Admin, and KQL data for the Azure Admin

In this publication we introduce a method to monitor index fragmentation in SQL PaaS using Azure's using `Data Collection Rules (DCR)` and `Data Collection Endpoints (DCE)`. With these features, fragmentation metrics can be regularly collected and sent to `Log Analytics`. Then data can be read easily using `Kusto Query Language (KQL)`. This method allows to expose and query the data using `Azure Workbooks`. It is a great mixture of product specific data (like SQL Server indexes fragmentation analysis), and standard `Azure Monitoring tools` like `Log Analytics`, `DCE`, `DCR`, `KQL` and `Workbooks`. For more on **DCR and DCE configuration**, see this link: [Azure Monitor Data Collection Rules](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rules).

This publication mixes two Administrator's worlds: Azure Admin, and SQL Server Admin.
As administrator's these are the type of queries involved in this publication:

- SQL Server DBA query:
  
```bash
SELECT 
    @@SERVERNAME AS server_name,
    db_name() AS database_name,
    s.name AS schema_name, 
    OBJECT_NAME(ps.object_id) AS table_name,
    i.name AS index_name,
    ips.index_type_desc,
    cast(ips.avg_fragmentation_in_percent as decimal(10,2)) avg_fragmentation_in_percent,
    ips.page_count, 
    getdate() as TimeGenerated
FROM   
sys.dm_db_partition_stats ps 
INNER JOIN sys.indexes i ON ps.object_id = i.object_id AND ps.index_id = i.index_id
CROSS APPLY sys.dm_db_index_physical_stats(DB_ID(), ps.object_id, ps.index_id, NULL, 'LIMITED') ips
INNER JOIN sys.objects o ON ps.object_id = o.object_id
INNER JOIN sys.schemas s ON o.schema_id = s.schema_id
WHERE ips.avg_fragmentation_in_percent > 50
ORDER BY ips.avg_fragmentation_in_percent DESC;
```

- Azure Admin KQL query:
  
```bash
Custom-TablesFragmentation_CL
| project 
    server_name, schema_name, table_name, index_name, index_type_desc, 
    avg_fragmentation_in_percent, page_count, 
    Res_TenantId, Res_SubscriptionId, Res_ResourceId, TimeGenerated
```

These are the resources that need to be created:

- Log analytics workspace
- Custom table to store the data in Log Analytics
- Data Collection Endpoint to connect to the Log Analytics Workspace
- Data Collection Rule that governs the data schema, and "connects" the Endpoint to the Log Analytics table

## Using DCR and DCE to gather the data

To efficiently collect index fragmentation data from an Azure SQL Database, we use **Data Collection Endpoints (DCE)** and **Data Collection Rules (DCR)**, both part of [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/). These tools define which data to collect and where to send it, enabling efficient data collection and analysis of fragmentation metrics.

To insert the data into `Azure Log Analytics`, we are using API Calls to direct ingest into `Azure Log Analytics`. this link [shows the details](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-overview#direct-ingestion).

![Image]({{ site.baseurl }}/azure/monitoring/img/advanced-monitoring/image-01.png){: .css-imagen-full}

These are the specifics of our case:
- Source (Custom Application) is a `Azure Runbook`, that gets activated every 6 hours.
- There is no need to tranform the data: The data that gets into the pipeline is ingested into `Azure Log Analytics`.

In order to run these data ingestion, it is neccesary to setup:

- An Azure Log Analytics Workspace
- A Custom table in the Log Analytics Workspace
- A Data Collection Endpoints
- A Data Collection Rule

Note. We recommend using `service principals` with these permissions:
- `Monitoring Metrics Publisher` into the Log Analytics Workspace, DCE, and DCR.
- `Monitoring Reader` into the Log Analytics Workspace, DCE, and DCR.
- Enough permissions to access relevant DMVs [SQL Server Permissions](https://learn.microsoft.com/en-us/sql/relational-databases/system-dynamic-management-views/sys-dm-db-index-physical-stats-transact-sql?view=sql-server-ver16#permissions)

## Log Analytics Workspace

Log Analytics Workspace is a powerful resource within Azure Monitor that allows organizations to collect, analyze, and visualize log and performance data from various sources. By centralizing the monitoring of different applications and services, users can gain valuable insights into system health, usage patterns, and potential issues. This workspace enables data retention, querying with Kusto Query Language (KQL), and the integration of various Azure services for enhanced observability.

This is the code to create the Log Analytics Workspace:

```bash
# Create the Log Analytics Workspace
$subscriptionId = "your_subscription_GUID"
$workspaceName = "ws-loganalytics-dc"

New-AzOperationalInsightsWorkspace -ResourceGroupName $resourceGroupName `
    -PublicNetworkAccessForIngestion "enabled" `
    -Name $workspaceName `
    -Location $location `
    -Sku Standard
```

## Log Analytics custom table

After creating the Log Analytics Workspace the Custom table needs to be created. It is great to tight to a schema. Everything will be more under control. If you want to create from the portal, [follow this link](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/manage-logs-tables?tabs=azure-portal). If you prefer PowerShell code, this would be a great pattern to use:

```bash
$subscriptionId = "your_subscription_GUID"
$resourceGroupName = "rg-erincon01"
$workspaceName = "ws-loganalytics-dc"
$tableName = "Custom-TablesFragmentation_CL"

# url for post
$url = "https://management.azure.com/subscriptions/$subscriptionId/resourceGroups/$resourceGroupName/providers/Microsoft.OperationalInsights/workspaces/$workspaceName/tables/$tableName?api-version=2021-12-01-preview"

# body for post
$body = @{
    properties = @{
        schema = @{
            name = $tableName
            columns = @(
                    @{ name = "server_name"; type = "string" },
                    @{ name = "schema_name"; type = "string" },
                    @{ name = "table_name"; type = "string" },
                    @{ name = "index_name"; type = "string" },
                    ...
                    @{ name = "Res_TenantId"; type = "string" }
                    @{ name = "Res_SubscriptionId"; type = "string" }
                    @{ name = "Res_ResourceGroup"; type = "string" }
                    @{ name = "Res_ResourceId"; type = "string" }
            )
        }
        retentionInDays = 30
    }
} | ConvertTo-Json -Depth 5

# access token
$token = (Get-AzAccessToken -ResourceUrl "https://management.azure.com").Token

# PUT request
Invoke-RestMethod -Uri $url -Method Put -Headers @{ Authorization = "Bearer $token" } -Body $body -ContentType "application/json"
```

Note that we have added a few columns that start with "Res_%". We want to make easier for workbooks developer to "link" the Azure Resource that is ingesting the data.

## Data Collection Endpoints (DCE)

`Data Collection Endpoints (DCE)` defines the destination where collected data will be sent. DCEs act as a delivery endpoint, directing the collected data to a specific location, such as `Log Analytics`. In this setup, DCE serves as a bridge that facilitates the flow of index fragmentation metrics from SQL PaaS databases to `Log Analytics`, allowing for centralized monitoring and analysis.

A `Data Collection Endpoint (DCE)` can be used across multiple `Data Collection Rules (DCRs)`, enabling centralized data collection from various sources into a single destination like `Log Analytics`. This approach simplifies data management and optimizes resource usage by reducing the number of endpoints needed, which is especially beneficial in large environments. By configuring multiple DCRs to send data to the same DCE, you can efficiently monitor similar metrics—such as index fragmentation—from different SQL PaaS databases or applications.

For detailed guidance on DCE configuration, refer to [Data Collection Endpoints documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-endpoints).

NOTE: Microsoft wants to make [optional DCE](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-endpoint-overview?tabs=portal#when-is-a-dce-required) if you are not using Private End Points. However, we haven't been able to setup a DCE without a DCE. This is a sample architecture using DCE in a single region scenario.

![Image]({{ site.baseurl }}/azure/monitoring/img/advanced-monitoring/image-02.png){: .css-imagen-full}

DCE are useful in multi-region scenarios as this capture shows:

![Image]({{ site.baseurl }}/azure/monitoring/img/advanced-monitoring/image-03.png){: .css-imagen-full}

This is the sample code to create the Data Collection Endpoint:

```bash
$resourceGroup="rg-erincon01"
$location="northeurope"
$dceName="sql-databases-dce"

# Create the Data Collection Endpoint
az monitor data-collection endpoint create `
  --resource-group $resourceGroup `
  --location $location `
  --name $dceName `
  --public-network-access "Enabled"

# list the dce to get the ImmutableId
az monitor data-collection endpoint list --resource-group $resourceGroup --output table
```

## Data Collection Rules (DCR)

Once the DCE is created, you should create the Data Collection Rules (DCR). DCRs specify the exact data to collect, such as index fragmentation metrics, and direct it to the predefined DCE. By setting up a DCR specifically for SQL PaaS fragmentation metrics, we ensure a consistent, structured data collection process that is crucial for efficient monitoring.

A `Data Collection Rule (DCR)` in Azure can be configured to target multiple specific resources or designed as a "reusable template" that doesn’t require specifying a resource at the time of creation. This setup offers flexibility in DCR configuration and usage across environments.

For more information on setting up DCR, see the [official documentation on Data Collection Rules](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rules).

There are a few considetions when building DCRs, for details see this [best practices article](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/data-collection-rule-best-practices).

For our scenario this is the Json document pattern we have used:

```bash
$dcrProperties = @{
    location = $location
    kind = "Direct"
    properties = @{
        streamDeclarations = @{
            $streamName = @{
                columns = @(
                    @{ name = "server_name"; type = "string" },
                    ...
                    @{ name = "Res_TenantId"; type = "string" }
                    @{ name = "Res_SubscriptionId"; type = "string" }
                    @{ name = "Res_ResourceGroup"; type = "string" }
                    @{ name = "Res_ResourceId"; type = "string" }
                )
            }
        } 
        destinations = @{
            logAnalytics = @(
                @{
                    workspaceResourceId = "worspaceId"
                    name = "LogAnalyticsDest"
                }
            )
        }
        dataFlows = @(
            @{
                streams = @($streamName)
                destinations = @("LogAnalyticsDest")
                transformKql = "kql query"
                outputStream = $tableName
            }
        )
        dataCollectionEndpointId = "dceId"
    }
}
```

In order to create the DCR, we have struggle issues with Azure CLI. Finally we decided to use the REST-API for better issues diagnosis (error's handling from the `New-AzDataCollectionRule`'s CLI methods).

```bash
$jsonDcrProperties = $dcrProperties | ConvertTo-Json -Depth 20

# API-REST call
$url = "https://management.azure.com/subscriptions/$subscriptionId/resourceGroups/$resourceGroupName/providers/Microsoft.Insights/dataCollectionRules/$dcrName?api-version=2023-03-11"
$token = (Get-AzAccessToken).Token
$response = Invoke-RestMethod -Uri $url -Method Put -Body $jsonDcrProperties -ContentType "application/json" -Headers @{Authorization = "Bearer $token"}
```

## Permissions

It is necessary handing correctly permissions. Following the least privilege rule, if you need to ingest data `Monitoring Metrics Publisher` is needed. Aditionally, to read the logs, you'd need `Monitoring Reader` permission.
We recommend using `service principals`. Use this code as sample/template:

```bash

# monitoring permissions for service principal
$servicePrincipal_ObjectId = (Get-AzADServicePrincipal -ApplicationId $servicePrincipal).Id
$dceId = "/subscriptions/$subscriptionId/resourceGroups/$resourceGroupName/providers/Microsoft.Insights/dataCollectionEndpoints/$dceName"
$dcrId = "/subscriptions/$subscriptionId/resourceGroups/$resourceGroupName/providers/Microsoft.Insights/dataCollectionRules/$dcrName"
$wksId = "/subscriptions/$subscriptionId/resourceGroups/$resourceGroupName/providers/Microsoft.OperationalInsights/workspaces/$workspaceName"


# publisher -- role assigment permissions to dce, dcr, and workspace
New-AzRoleAssignment -ObjectId $servicePrincipal_ObjectId -RoleDefinitionName "Monitoring Metrics Publisher" -Scope $dceId
New-AzRoleAssignment -ObjectId $servicePrincipal_ObjectId -RoleDefinitionName "Monitoring Metrics Publisher" -Scope $dcrId
New-AzRoleAssignment -ObjectId $servicePrincipal_ObjectId -RoleDefinitionName "Monitoring Metrics Publisher" -Scope $wksId

# reader -- role assigment permissions to dce, dcr, and workspace
New-AzRoleAssignment -ObjectId $servicePrincipal_ObjectId -RoleDefinitionName "Monitoring Reader" -Scope $dceId
New-AzRoleAssignment -ObjectId $servicePrincipal_ObjectId -RoleDefinitionName "Monitoring Reader" -Scope $dcrId
New-AzRoleAssignment -ObjectId $servicePrincipal_ObjectId -RoleDefinitionName "Monitoring Reader" -Scope $wksId

```

## Ingesting data into Log Analytics

Once the insfrastructure is setup, you are ready to ingest data into the Log Analytics custom table. [This link](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/tutorial-logs-ingestion-portal) includes a full-detailed sample. You can use [this link](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/tutorial-logs-ingestion-portal) to generate sample data too.

In our case, we have built this architecture:

![Image]({{ site.baseurl }}/azure/monitoring/img/advanced-monitoring/image-04.png){: .css-imagen-full}

Where we have these configuration files:

- logger.json that includes the DCR, DCE, and log analytics where to ingest the data.
- targets.json that includes the SQL Server data sources that we want to assess.
- queries.json that includes the SQL Server scripts to assess.

In order to send the data to log analytics we use the RESP-API approach again:

```bash
try {
        $scope = "https://monitor.azure.com/.default"
        $accessToken = Get-AccessToken -TenantId $tenantId -ClientId $clientId -ClientSecret $clientSecret -Scope $scope
        $dateHeader = [DateTime]::UtcNow.ToString("R")

        # Construir los encabezados HTTP
        $headers = @{
            "Authorization" = "Bearer $accessToken"
            "Content-Type"  = "application/json"
            "x-ms-date"     = $dateHeader
            "Log-Type"      = "VerneTechSQLServerMonitoring-$tableName"
        }

        $dceUri += "/dataCollectionRules/$dcrImmutableId/streams/Custom-$Table" + "?api-version=2023-01-01"
        Write-Verbose "Request header: $($headers | Out-String)"

        $response = Invoke-RestMethod -Uri $DceUri -Method POST -Body $jsonArray -Headers $headers -ErrorAction Stop
        return $response
    } catch {
        # handling errors
        Write-Error "Error al enviar datos a Log Analytics: $_"
    }
```

## Exposing data into Workbooks

Finally, data must be exposed into a report. Once the data is into log analytics, there are several ways to build reporting.

![Image]({{ site.baseurl }}/azure/monitoring/img/advanced-monitoring/image-06.png){: .css-imagen-full}

This is an example where Custom table is exposed into an `Azure Workbook`.
![Image]({{ site.baseurl }}/azure/monitoring/img/advanced-monitoring/image-05.png){: .css-imagen-full}

## Conclusions

In summary, **monitoring index fragmentation** within `Azure SQL Databases` is essential for maintaining optimal performance, especially in PaaS environments characterized by dynamic workloads. By leveraging Azure's `Data Collection Rules (DCR)` and `Data Collection Endpoints (DCE)`, administrators can efficiently collect and analyze fragmentation metrics, integrating them seamlessly with Azure Log Analytics for enhanced visibility and monitoring capabilities.

The approach outlined in this article not only facilitates the automation of data collection but also bridges the gap between SQL Server administration and Azure management. By employing Kusto Query Language (KQL) to query the collected data, users can gain valuable insights into fragmentation trends, allowing for timely interventions to mitigate performance degradation.

Implementing this solution requires careful attention to resource configuration, permissions, and data handling practices to ensure that monitoring is both effective and secure. Following the best practices highlighted throughout the article will enable organizations to optimize their Azure SQL Database performance while maintaining an efficient and responsive monitoring strategy.

With the right tools and configurations in place, Azure administrators and SQL Server DBAs can collaboratively manage fragmentation data, ensuring that applications perform optimally in today's data-driven environments.

---

## Author

<div id="author-container" data-author-id="erincon01"></div>
<script src="/doc/assets/authors/load-author.js"></script>
