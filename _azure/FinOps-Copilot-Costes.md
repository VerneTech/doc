---
title: Costs Copilot
layout: default
parent: FinOps - Verne Tech
nav_exclude: false
nav_order: 3
---

# Azure Costs Management Copilot - Verne Tech

---

<details open markdown="block">
  <summary>Tabla de Contenidos</summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Introducción al valor de un Copilot

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-13.png){: .css-imagen}

Un Copilot, como Azure Costs Management Copilot (ACM Copilot), **simplifica el proceso de seguimiento y control de gastos en la nube** al traducir datos financieros complejos en información clara y comprensible. Esta herramienta **permite a los usuarios interactuar en lenguaje natural**, haciéndole preguntas directas sobre **los gastos, `presupuestos` y uso de recursos**, sin necesidad de un conocimiento técnico profundo ni de navegar por interfaces complicadas. Al utilizar un enfoque conversacional, los equipos pueden tomar decisiones informadas basadas en los datos disponibles de forma rápida y eficiente.

Una de las principales ventajas de utilizar un Copilot es la **accesibilidad** a los datos de costes de forma agregada mensualmente, ya que el asistente puede proporcionar informes detallados y visualizaciones de costos agrupados por suscripción, grupos de recursos, centros de costos y otras métricas relevantes. De este modo, se fomenta la transparencia en la gestión de costos, facilitando la identificación de oportunidades de optimización y promoviendo una cultura de responsabilidad financiera dentro de la organización.

A diferencia del Copilot de Microsoft, el ACM Copilot de Verne Tech hace especial **hincapié en la gestión de `presupuestos`, las desviaciones de gasto y las segmentaciones de valor del cliente**. Esto incluye la capacidad de analizar **centros de costes, propietarios de recursos y la privacidad de grupos de recursos** mediante un etiquetado eficiente. Al estructurar y clasificar los datos de esta forma, se mejora la precisión del análisis y se facilita el control granular de los costos, alineando las inversiones tecnológicas con las prioridades y necesidades específicas de cada organización.

## Lo que no es ACM Copilot (v1.0)

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-whatsnot.webp){: .css-imagen}

Es importante establecer las expectativas correctas sobre lo que ACM Copilot puede y no puede hacer en su versión actual. Aunque ofrece un soporte valioso para la gestión financiera y el análisis de costes en Azure, **ACM Copilot** tiene ciertas **limitaciones** que los usuarios deben conocer para aprovechar al máximo sus funcionalidades sin expectativas irreales. A continuación, se detallan algunas de estas limitaciones clave:

1. **No ofrece análisis en tiempo real:** ACM Copilot se basa en datos históricos y cerrados a mes vencido. Esto significa que no está diseñado para proporcionar análisis o información en tiempo real. Los datos que maneja reflejan únicamente periodos completos y ya finalizados, lo cual puede limitar la capacidad para tomar decisiones inmediatas basadas en el uso actual de recursos o costes recientes.

2. **No realiza configuraciones directas:** Aunque ACM Copilot puede guiar a los usuarios sobre cómo configurar suscripciones, alarmas y `presupuestos`, **no tiene la capacidad de realizar estas configuraciones directamente**. La implementación de cambios específicos en Azure requiere la intervención manual del usuario a través del portal de Azure u otras herramientas administrativas, como PowerShell o CLI.

3. **No interactúa con interfaces externas:** ACM Copilot no tiene la capacidad de interactuar directamente con interfaces externas ni de ejecutar acciones automáticas en tu infraestructura. Esto incluye la modificación de configuraciones específicas, la activación de servicios o la integración con sistemas externos sin intervención humana.

4. **No proporciona inteligencia avanzada en automatización:** A diferencia de un sistema de automatización integral, ACM Copilot se centra en la recopilación de datos financieros y en proporcionar recomendaciones basadas en información histórica. No está diseñado para desarrollar automatizaciones complejas o tomar decisiones autónomas sobre los recursos de la infraestructura.

5. **Limitado por la información disponible y el etiquetado:** La precisión de las respuestas y recomendaciones del Copilot depende en gran medida de la calidad y riqueza del etiquetado y los datos proporcionados por la organización. Si las `etiquetas` no están bien definidas o faltan detalles críticos, las recomendaciones pueden carecer de la especificidad necesaria.

6. **No cubre actualmente GCP ni AWS:** ACM Copilot se centra exclusivamente en datos provenientes de **Azure**. En su versión actual, no ofrece soporte para otras plataformas en la nube como **Google Cloud Platform (GCP)** o **Amazon Web Services (AWS)**, lo cual limita el alcance del análisis financiero a la infraestructura de Azure.

Entender estas limitaciones es clave para **aprovechar eficazmente** ACM Copilot y alinear su uso con las necesidades y expectativas de la organización. Su rol principal es proporcionar **soporte informativo** y mejorar la toma de decisiones financieras mediante la interpretación de datos históricos de costes, ayudando a los equipos a optimizar sus recursos y `presupuestos` en Azure.

## Apoyo en la adopción de FinOps

ACM Copilot no solo facilita el análisis y la gestión de costes, sino que también se alinea con las **mejores prácticas de FinOps**, apoyando a las organizaciones en su adopción. La práctica de FinOps busca optimizar la gestión financiera en la nube mediante una cultura de colaboración entre equipos de finanzas, tecnología y operaciones, impulsando la toma de decisiones basadas en datos y la maximización del valor empresarial.

### Material de ayuda en la práctica FinOps

ACM Copilot proporciona **guías personalizadas** y recomendaciones adaptadas a las necesidades específicas de los equipos, ayudando en la configuración de `presupuestos`, alertas y estrategias financieras alineadas con los principios de FinOps. Además, ofrece ejemplos prácticos para implementar un enfoque colaborativo en la gestión de costes, facilitando la integración de las herramientas de análisis en las operaciones diarias.

Para quienes deseen profundizar en FinOps, ACM Copilot incluye enlaces a **recursos y referencias de Microsoft**, como:

- **Microsoft Cost Management Documentation**: Una guía completa para el uso de las herramientas de análisis y control de costes en Azure, incluyendo configuraciones avanzadas y prácticas recomendadas. Puedes acceder a esta guía [aquí](https://docs.microsoft.com/en-us/azure/cost-management/).
- **Azure Well-Architected Framework - Cost Optimization**: Un conjunto de mejores prácticas para optimizar los costes en la nube, basado en el enfoque de Microsoft hacia la arquitectura eficiente. Más información [aquí](https://docs.microsoft.com/en-us/azure/architecture/framework/cost/).
- **FinOps Foundation**: Organización dedicada a promover y desarrollar prácticas de FinOps, con acceso a webinars, eventos y recursos adicionales. Visita su página [aquí](https://www.finops.org/).

## Ejemplos de conversaciones

ACM Copilot permite a los usuarios interactuar en lenguaje natural para obtener respuestas específicas sobre la gestión de costes en Azure. A continuación, se presentan algunos **ejemplos de conversaciones** que ilustran cómo se puede aprovechar esta herramienta para obtener información útil:

### Copilot como instructor de FinOps

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q0.png){: .css-imagen-full}

### Copilot como asistente sobre qué preguntar

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q1.png){: .css-imagen-full}

### `Subscripciones` más costosas, sus owners, sus `presupuestos`, y sus centros de costes

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q2.png){: .css-imagen-full}

### Búsqueda dirigida a subscripción concreta analizando cumplimiento de `presupuesto`

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q3.png){: .css-imagen-full}
![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q4.png){: .css-imagen-full}

### Búsqueda de información por `centro de costes`

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q5.png){: .css-imagen-full}

### Formateado en tabla

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q6.png){: .css-imagen-full}

### Alineación y estilos

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q7.png){: .css-imagen-full}

### Busqueda de `owners` con más coste en periodo

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-q8.png){: .css-imagen-full}

Estos ejemplos muestran cómo ACM Copilot puede ayudar a los equipos a obtener **información detallada** y a tomar decisiones basadas en datos de una manera intuitiva y eficiente. El modelo es capaz de proporcionar respuestas claras y estructuradas, enfocadas en los costes y el `presupuesto` en la plataforma de Azure.

## Estructura de las conversaciones

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-qa.webp){: .css-imagen}

La estructura de las conversaciones en ACM Copilot está diseñada para proporcionar respuestas precisas y útiles, enfocándose en preguntas bien formuladas y detalles relevantes. Una correcta formulación de preguntas permite identificar patrones de gasto, optimizar el uso de recursos y tomar decisiones informadas de manera rápida y eficiente. Para obtener resultados efectivos, es importante seguir los siguientes principios clave:

1. **Definir el Alcance:** Antes de formular una pregunta, decide si deseas analizar los costes por suscripción, grupo de recursos, tipo de recurso, propietario o centro de costes. Esta decisión ayudará a segmentar los datos y enfocará las respuestas en la información relevante para tus necesidades.

2. **Uso de `etiquetas` en las búsquedas:** Si el equipo de Gobierno de Azure ha definido políticas de etiquetado, asegúrate de aprovechar estas `etiquetas`. El modelo se enriquecerá con columnas como centro de costes, propietario, criticidad, privacidad, equipo responsable, y carga de trabajo. Utilizar `etiquetas` adecuadas permite búsquedas más precisas y alineadas con los objetivos de la organización.

3. **Establecer un Rango de Fechas:** Especificar un periodo de análisis es fundamental para obtener respuestas significativas. Definir un mes específico o un rango más amplio te permitirá analizar la información por meses completos, asegurando la precisión y coherencia de los datos proporcionados por ACM Copilot.

4. **Seleccionar Detalles Específicos:** Considera incluir detalles adicionales en tus preguntas, como el nombre del workload, el equipo responsable o la criticidad del negocio. Esta especificidad ayuda a reducir la ambigüedad y permite que las respuestas sean más relevantes para tu contexto operativo.

5. **Formular Preguntas Claras:** Es esencial hacer preguntas claras y específicas para obtener respuestas precisas. Ejemplos de preguntas efectivas podrían ser: "¿Cuáles son los costes mensuales por suscripción en julio?" o "¿Qué centro de costes tuvo más gastos entre enero y agosto?". Este enfoque asegura que el Copilot pueda procesar y devolver información útil y directa.

Al seguir estos principios, ACM Copilot puede proporcionar una visibilidad detallada de los gastos, comparativas entre periodos y análisis de centros de costes, propietarios, y otros elementos clave. Esta estructura no solo mejora la eficiencia en la gestión financiera, sino que también promueve una toma de decisiones más fundamentada y basada en datos concretos.

## Trucos para usar ACM Copilot Verne Tech

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-tips.webp){: .css-imagen}

Trabajar de manera efectiva con ACM Copilot implica conocer algunos trucos y mejores prácticas que pueden mejorar la precisión y utilidad de las respuestas. Estos consejos se basan en la experiencia de utilizar ACM Copilot y otros asistentes basados en modelos LLM. A continuación, se presentan algunos trucos clave para maximizar el potencial de ACM Copilot:

1. **Reintentos mejorados:** Si la respuesta obtenida no es la esperada, reformula tu pregunta o proporciona más detalles. A veces, simplificar o aclarar el enfoque de la pregunta puede mejorar significativamente la calidad de la respuesta.

2. **Contexto de conversaciones anteriores:** Cuando una conversación se extiende a varios temas o días, menciona detalles clave de interacciones previas. Esto ayuda a mantener la coherencia y evita tener que repetir información continuamente, lo que mejora la experiencia del usuario y la precisión de las respuestas.

3. **Desglosar preguntas complejas:** Si tienes una pregunta extensa o compleja, divídela en partes más manejables. Este enfoque permite obtener respuestas más precisas y enfocadas, facilitando así el análisis posterior y la toma de decisiones.

4. **Usa ejemplos concretos:** Siempre que sea posible, incluye ejemplos específicos relacionados con tu dominio o proyecto. Esto ayuda al modelo a entender mejor tus necesidades y a generar respuestas más útiles y ajustadas al contexto en el que estás trabajando.

5. **Usa `etiquetas` para filtrar resultados:** Si tu organización ha implementado políticas de etiquetado, realiza búsquedas utilizando estas `etiquetas`. Es común buscar por equipos de trabajo, propietarios o cargas de trabajo, lo que permite obtener resultados segmentados y alineados con los objetivos organizacionales.

Además de estos trucos, es importante ajustar correctamente la `temperatura` del modelo para obtener respuestas más precisas y evitar desviaciones especulativas, así como reformular las consultas en diferentes formatos si no estás seguro de que se haya entendido correctamente la pregunta. Al aplicar estos consejos, podrás aprovechar al máximo las capacidades de ACM Copilot para optimizar la gestión financiera en Azure. En la versión actual, los ajustes de `temperatura` no los puede hacer el usuario. En el mapa del producto tenemos incluido que el usuario pueda decidir en parámetros como la `temperatura`, `subscripciones` por defecto, `idioma`, anonimización de datos, y seguridad a nivel de registro (`RLS`).

## Modelo de datos de costes

![Imagen]({{ site.baseurl }}/azure/img/finops/finops-image-14.png){: .css-imagen}

El modelo de datos de costes implementado en ACM Copilot de Verne Tech permite una personalización precisa para reflejar las necesidades específicas de cada cliente. Este modelo integra datos tecnológicos de la plataforma Azure junto con información de negocio que se expone principalmente a través de `etiquetas` definidas, como centros de costes, propietarios, y clasificaciones de privacidad. Esta personalización es clave para ofrecer una visibilidad detallada de los gastos y su segmentación. A continuación, se detallan los datasets principales utilizados y sus características:

| Dataset                               | Propósito                                                                                 | Detalle de las columnas                                                                                                                                 |
|---------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Registros de `presupuestos`**         | Facilitar la planificación financiera y asegurar la correcta utilización de recursos.    | **TenantId:** ID del inquilino <br> **SubscriptionID:** ID de la suscripción <br> **SubscriptionName:** Nombre de la suscripción <br> **BudgetName:** Nombre del `presupuesto` <br> **Scope:** Ámbito del `presupuesto` <br> **TimeGrain:** Frecuencia del `presupuesto` (generalmente mensual) <br> **Amount:** Cantidad asignada <br> **Type:** Tipo de `presupuesto` <br> **Date:** Fecha de asignación del `presupuesto` <br> **Owner:** Propietario del `presupuesto` <br> **TimePeriodStartDate:** Fecha de inicio del periodo <br> **TimePeriodEndDate:** Fecha de fin del periodo |
| **Registros de Costes**               | Identificar patrones de gasto y optimizar el uso de los recursos.                        | **TenantId:** ID del inquilino <br> **SubscriptionID:** ID de la suscripción <br> **SubscriptionName:** Nombre de la suscripción <br> **Cost:** Coste asociado <br> **Date:** Fecha del coste <br> **ResourceID:** ID del recurso <br> **ResourceGroup:** Grupo de recursos <br> **ResourceType:** Tipo de recurso <br> **BusinessCriticality:** Criticidad del negocio <br> **CostCenter:** Centro de costes <br> **DataClassification:** Clasificación de datos <br> **Owner:** Propietario del recurso o coste <br> **Team:** Equipo responsable |
| **Registros Mensuales**               | Controlar la evolución mensual de `presupuestos` y costes por suscripción o grupo de recursos. | **TenantId:** ID del inquilino <br> **SubscriptionID:** ID de la suscripción <br> **SubscriptionName:** Nombre de la suscripción <br> **YearMonth:** Mes y año de los costes <br> **Budget:** `presupuesto` asignado <br> **Cost:** Costo total mensual <br> **CostLastMonth:** Coste del mes anterior <br> **DifferenceLastMonthPercent:** Diferencia porcentual con el mes anterior |
| **Costes Mensuales por Suscripción**  | Mostrar los costes mensuales simplificados por suscripción y comparar con periodos anteriores. | **TenantId:** ID del inquilino <br> **SubscriptionID:** ID de la suscripción <br> **SubscriptionName:** Nombre de la suscripción <br> **YearMonth:** Mes y año de los costes <br> **Cost:** Coste total mensual <br> **CostLastMonth:** Coste del mes anterior <br> **DifferenceLastMonthPercent:** Diferencia porcentual con el mes anterior |
| **Costes Mensuales por Grupo de Recursos** | Proporcionar visibilidad del coste mensual a nivel de grupo de recursos.                   | **TenantId:** ID del inquilino <br> **SubscriptionID:** ID de la suscripción <br> **SubscriptionName:** Nombre de la suscripción <br> **ResourceGroupName:** Nombre del grupo de recursos <br> **YearMonth:** Mes y año de los costes <br> **Cost:** Coste total mensual <br> **CostLastMonth:** Coste del mes anterior <br> **DifferenceLastMonthPercent:** Diferencia porcentual con el mes anterior |

Este modelo de datos se adapta a las particularidades del cliente, utilizando `etiquetas` para incluir información específica como centros de costes, propietarios y privacidad de los grupos de recursos. Así, se logra una segmentación más precisa y un control exhaustivo de los gastos, permitiendo una toma de decisiones mejor fundamentada.

## Funciones disponibles en ACM Copilot

ACM Copilot ofrece una serie de **funciones** diseñadas para facilitar el análisis y gestión de los costes en Azure de una manera eficiente y personalizada. Estas funciones permiten segmentar y consultar los datos financieros según diferentes criterios, como suscripciones, grupos de recursos, tipos de recursos, centros de costes y más. A continuación, se detallan las funciones principales de ACM Copilot y su propósito.

**ChatSkill-GetMonthlyCosts** permite obtener los costes agrupados por suscripción y mes dentro de un rango de fechas específico. Esta función resulta útil para analizar cómo se distribuyen los gastos a lo largo del tiempo en diferentes suscripciones, identificando patrones de gasto y áreas de mejora. Los usuarios pueden especificar un rango de fechas y suscripciones concretas para obtener una visión detallada.

**ChatSkill-GetMonthlyBudgets** se enfoca en la comparación entre el gasto real y el `presupuesto` asignado por suscripción y mes. Esta función ayuda a identificar desviaciones respecto al `presupuesto`, permitiendo a las organizaciones ajustar sus estrategias financieras de manera oportuna y alineada con sus objetivos.

**ChatSkill-GetMonthlyResourceGroupsCosts** ofrece la posibilidad de analizar los costes agrupados por grupo de recursos y mes dentro de un rango de fechas específico. Esta función permite profundizar en la distribución de gastos entre diferentes grupos de recursos, facilitando la optimización de costes de manera granular y precisa.

Otra función importante es **ChatSkill-GetCostsByResourceTypeAndMonth**, que permite identificar qué tipos de recursos están generando más gastos. Esto es clave para optimizar la asignación de recursos y gestionar de manera más eficiente los costos asociados a cada tipo de recurso en Azure.

Finalmente, **ChatSkill-GetCostsByOwnerAndMonth** permite segmentar los gastos por propietario y mes, lo cual facilita la asignación de responsabilidades y mejora la gestión financiera al tener una visión clara de quién es responsable de cada gasto. Esta segmentación permite a las organizaciones identificar oportunidades de optimización y ajustar sus estrategias de forma eficiente.

Estas funciones proporcionan a ACM Copilot la capacidad de realizar un análisis granular de los costes y una asignación clara de responsabilidades, lo que facilita la optimización de recursos y el control presupuestario. Cada función se puede personalizar según las necesidades específicas de la organización, ofreciendo **flexibilidad y precisión** en la gestión financiera de la nube.

---

- **Sección** :: [Introducción a FinOps]({{ site.baseurl }}/azure/FinOps-1-FinOps)
- **Sección** :: [Informes, `presupuestos`, y Alertas]({{ site.baseurl }}/azure/FinOps-2-FinOps)
- **Sección** :: [Estrategias de análisis, y extensibilidad]({{ site.baseurl }}/azure/FinOps-3-FinOps)
- **Sección** :: [Azure Costs Management Copilot - Verne Tech]({{ site.baseurl }}/azure/FinOps-Copilot-Costes)
