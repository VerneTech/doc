**Titular**: Campaña de phishing que abusa de Google Calendar y Google Drawings para robar credenciales

**Resumen**:
Una campaña de **phishing** en curso está utilizando **Google Calendar** y **Google Drawings** para robar **credenciales de acceso** mientras elude los filtros de **spam**. Según los informes de **Check Point**, que ha estado monitoreando este ataque, los **actores de amenazas** han dirigido sus esfuerzos a más de **300 marcas** enviando más de **4,000 correos electrónicos** en un periodo de cuatro semanas. Las víctimas del ataque pertenecen a diversos sectores, como **instituciones educativas**, **servicios de salud**, **empresas de construcción** y **entidades bancarias**.

El ataque comienza con el uso de **Google Calendar** para enviar invitaciones a reuniones que parecen completamente inofensivas, especialmente si los destinatarios reconocen a algunos de los invitados. Dentro de estas invitaciones, se incluye un enlace que lleva a una **página de Google Forms** o **Google Drawings**, donde los usuarios son incitados a hacer clic en otro enlace, generalmente disfrazado como un botón de **reCaptcha** o de **soporte**. Esta táctica está diseñada para engañar a los usuarios, haciéndoles creer que están interactuando con servicios legítimos de Google.

La clave del éxito de este ataque radica en el uso de **Google Calendar** como plataforma para enviar las invitaciones. Al provenir de un servicio legítimo de **Google**, los correos electrónicos evaden fácilmente los filtros de **spam**, ya que los encabezados del mensaje parecen completamente auténticos y no se distinguen de las invitaciones enviadas por usuarios normales de Google Calendar. Según los investigadores, los correos electrónicos pasan las comprobaciones de **DKIM**, **SPF** y **DMARC**, lo que permite que las invitaciones de phishing lleguen a las bandejas de entrada de los destinatarios sin ser detectadas como spam.

Un aspecto adicional que incrementa la efectividad del ataque es que los actores de amenazas pueden cancelar el evento de **Google Calendar** y enviar un mensaje a los asistentes, lo cual también puede incluir otro enlace malicioso, como un enlace a **Google Drawings**, para redirigir aún más a los usuarios hacia las páginas de phishing. Este método de doble ataque, utilizando tanto Google Calendar como Google Drawings, aumenta las posibilidades de que los usuarios caigan en el engaño, ya que parecen interacciones legítimas con herramientas conocidas de Google.

Aunque el uso de **Google Calendar** para phishing no es algo nuevo, Google ya ha implementado ciertas protecciones para permitir que los usuarios bloqueen más fácilmente este tipo de invitaciones. Sin embargo, estas protecciones solo estarán activas si el **administrador de Google Workspace** habilita las opciones de seguridad pertinentes. Si estas medidas no están activadas, los usuarios seguirán recibiendo invitaciones automáticamente en sus calendarios, lo que aumenta la probabilidad de que caigan en el ataque.

Los investigadores de Check Point advierten que los usuarios deben ser especialmente cautelosos con todas las invitaciones a reuniones que reciban, especialmente si incluyen enlaces que les piden hacer clic. Se recomienda ignorar estos enlaces a menos que se pueda verificar que el remitente es confiable o haya sido confirmado previamente.

**Tabla:**

| **Categoría**             | **Seguridad en la Nube**                                                                                             |  
|---------------------------|-----------------------------------------------------------------------------------------------------------------------|  
| **Nombre del tema**       | Campaña de phishing que explota Google Calendar y Google Drawings para robar credenciales                             |  
| **Brecha**                | Uso de herramientas legítimas de Google para enviar invitaciones de phishing que roban credenciales                   |  
| **Criticidad**            | <label class="label label-red">Alta</label>                                                                            |  
| **Solución propuesta**    | Activación de protecciones en Google Workspace, formación de usuarios sobre los riesgos de los enlaces desconocidos   |  
| **Beneficios esperados**  | Reducción del riesgo de comprometer credenciales, mayor concienciación en la detección de intentos de phishing        |  