---
title: Guia de estilo
layout: default
parent: About
nav_order: 2
---

# Guía de estilo

El objetivo de una guía de estilo es asegurar que el contenido no solo sea técnica y estilísticamente coherente, sino también accesible y atractivo para el lector. 
Esta guia cubre el tono de escritura, el formato de las publicaciones, y el uso preciso de la terminología. 
Se debe definir cómo se presentarán los artículos, incluyendo la estructura de títulos, subtítulos, y el formato de bloques de código, asegurando que los ejemplos de programación sean claros y fáciles de seguir.

Esta guía no lo incluye, pero idealmente, la guía debe especificar las convenciones de código, como la indentación y el nombramiento de variables, y establecer normas claras para el uso de imágenes y videos, incluyendo la resolución y la anotación adecuadas para maximizar la comprensión. La accesibilidad juega un papel crucial, con recomendaciones sobre el uso de texto alternativo para imágenes y la estructuración de contenido para lectores de pantalla, asegurando que el blog sea inclusivo para todos los usuarios. Estos aspectos si se cubren en las guías oficiales de grandes empresas como Microsoft, AWS, Google, o Apple. [Referencias oficiales](#referencias-oficiales). 

Además, las publicaciones tienen que ser de contenido genuino. Es bueno utilizar utilizas referencias a documentación o artículos ya existentes; el objetivo no es copiar el contenido, sino desarrollar contenido a través del aprendizaje.
El lector es hábil para utilizar herramientas como Copilot, o ChatGPT y buscar contenido por su cuenta. 
Deberías seguir la máxima de "¡aprende, madura y transforma ideas!". 
Explica como has llegado a adquirir el conocimiento que quieres reflejar en la publicación.

---

<details open markdown="block">
  <summary>Tabla de Contenidos</summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Estructura del documento

La publicación debe tener estas secciones.


| Sección                | Descripción                                                                                                                                                                                                                                                                                        |
|+-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Título**             | **Claro y Descriptivo:** El título debe ser conciso pero informativo, proporcionando una idea clara del tema o propósito del documento sin necesidad de leer el contenido completo.                                                                                                                |
| **Resumen**   | **Visión General Concisa:** Un párrafo que resume el objetivo del documento, la metodología empleada, los resultados principales y las conclusiones más significativas. Es la primera sección que lee mucha gente, por lo que debe ser capaz de estar por sí misma.                                  |
| **Tabla de Contenidos**| **Navegación Fácil:** Lista detallada de las secciones, subsecciones y, en algunos casos, figuras o tablas, con las páginas correspondientes para facilitar la navegación por el documento. Es esencial en documentos largos para ayudar a los lectores a encontrar rápidamente la información.    |
| **Introducción**       | **Establece el Escenario:** Presenta el tema, explica el contexto y la relevancia del trabajo, y establece los objetivos y preguntas de investigación. Puede incluir una breve revisión de la literatura para situar el trabajo dentro del campo existente.                                           |
| **Cuerpo**   | **Desarrollo y Argumentación:** El corazón del documento, donde se desarrollan las ideas principales. Se divide en múltiples secciones y subsecciones, cada una dedicada a diferentes aspectos del tema, como revisión de literatura, metodología, análisis de datos y discusión de resultados.       |
| **Conclusiones**       | **Resumen de Hallazgos e Implicaciones:** Recapitula los principales resultados y su importancia, y puede ofrecer recomendaciones basadas en los hallazgos. A menudo incluye reflexiones sobre las limitaciones del estudio y sugerencias para trabajos futuros.                                     |
| **Referencias**  (opcional)       | **Fundamentación del Trabajo:** Lista todas las obras citadas en el documento. El formato de esta sección debe seguir las guías de estilo relevantes (APA, MLA, IEEE, etc.), lo que permite a los lectores verificar las fuentes y profundizar en el tema.                                          |


## Estilo de escritura

| Sección                        | Recomendaciones                                                                                                                                                                                                                                           |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Claridad y Precisión**       | - Evita la jerga innecesaria. Utiliza términos técnicos solo cuando sea necesario. <br> - Define términos técnicos claramente la primera vez que aparezcan. <br> - Prefiere oraciones cortas y claras.                                                    |
| **Consistencia**               | - Mantén un uso consistente de términos técnicos. <br> - Establece un formato estándar para títulos, subtítulos, fuentes, y márgenes. <br> - Selecciona y usa de manera consistente un sistema de unidades (métrico o imperial).                          |
| **Uso de Gráficos y Tablas**   | - Asegura que sean fáciles de entender, con leyendas y títulos claros. <br> - Cada gráfico o tabla debe ser mencionado y explicado dentro del texto.                                                                                                      |
| **Revisión y Corrección**      | - Somete el documento a una revisión por parte de colegas o expertos. <br> - Realiza una corrección ortográfica y gramatical exhaustiva.                                                                                                                  |
| **Estilo de Escritura**        | - Prefiere la voz activa sobre la pasiva. <br> - Utiliza "monitorizar" en lugar de "monitorear" donde sea aplicable.                                                                                                                                       |
| **Accesibilidad**              | - Emplea un lenguaje inclusivo que no discrimine. <br> - Considera la inclusión de versiones accesibles de tu documento.                                                                                                                                   |
| **Actualizaciones**            | - Mantén un registro de las versiones del documento. <br> - Actualiza la guía de estilos según sea necesario para reflejar los cambios en las prácticas o estándares técnicos.                                                                             |


## Uso de segunda persona frente a tercera persona

Escribir de forma directa y personal crea una conexión directa con el lector, haciéndolo sentir más involucrado.
Es una forma de escribir ideal para tutoriales, guías paso a paso, o cualquier material educativo donde se busque guiar al lector a través de un proceso.

| Segunda Persona (Tú/Vosotros)                                 | Tercera Persona (Él/Ella/Ellos)                                                                                              |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| "Cuando instalas SQL Server, asegúrate de configurar las redes."     | "Cuando un usuario instala SQL Server, debe asegurarse de configurar las redes correctamente."                        |
| "Puedes mejorar el rendimiento de tu aplicación con Azure Cache."    | "Un desarrollador puede mejorar el rendimiento de su aplicación utilizando Azure Cache."                              |
| "Si experimentas un error, reinicia el sistema."                     | "Si un usuario experimenta un error, debe reiniciar el sistema."                                                      |
| "Antes de ejecutar el script, verifica tus permisos en el sistema."  | "Antes de ejecutar el script, el usuario debe verificar sus permisos en el sistema."                                  |
| "Para optimizar tu consulta, considera usar índices."                | "Para optimizar una consulta, se debe considerar el uso de índices."                                                  |
| "Si quieres implementar una solución de alta disponibilidad, Azure ofrece varias opciones." | "Si se desea implementar una solución de alta disponibilidad, Azure ofrece varias opciones."   |
| "Cuando configures tu entorno de Terraform, asegúrate de seguir las mejores prácticas." | "Cuando se configure un entorno de Terraform, es crucial seguir las mejores prácticas."            |
| "Si encuentras problemas con tu deployment, revisa los logs de Azure."| "Si se encuentran problemas con el deployment, se deben revisar los logs de Azure."                                  |
| "Antes de actualizar tu sistema, haz una copia de seguridad de tus datos." | "Antes de actualizar el sistema, el usuario debe hacer una copia de seguridad de los datos."                    |
| "Si necesitas ayuda con Bicep, consulta la documentación oficial."    | "Si se necesita ayuda con Bicep, se debe consultar la documentación oficial."                                        |



## Ejemplos de uso

| Ejemplos Incorrectos                                          | Ejemplos Correctos                                               |
|--------------------------------------------------------------|-----------------------------------------------------------------|
| Usar demasiada jerga técnica sin explicar.                    | Introducir y explicar términos técnicos cuando se usen.         |
| "El software fue monitorizado por el equipo."                | "El equipo monitorizó el software."                             |
| Inconsistencias en la terminología técnica.                  | Usar la misma terminología técnica a lo largo del documento.    |
| Falta de definiciones para términos técnicos introducidos.    | Definir todos los términos técnicos la primera vez que aparezcan.|
| Oraciones largas y complicadas con múltiples cláusulas.       | Oraciones cortas y claras que transmitan un solo punto.         |
| Mezclar unidades de medida (imperial y métrico) sin conversión.| Elegir un sistema de unidades y ser consistente.                |
| Tablas y gráficos sin títulos ni explicaciones en el texto.   | Incluir títulos claros en tablas/gráficos y referenciarlos en el texto.|
| Documentos sin una estructura clara.                          | Usar una estructura lógica con introducción, cuerpo y conclusión.|
| No citar las fuentes de información.                          | Proporcionar una lista de referencias y citar adecuadamente.    |
| Uso de lenguaje que podría interpretarse como sesgado.        | Emplear un lenguaje neutro e inclusivo.                         |



## Referencias Oficiales

- [Microsoft Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/)
- [Apple Style Guide - 2022](https://support.apple.com/es-es/guide/applestyleguide/apsg1eef9171/web)
- [Google developer documentation style guide](https://developers.google.com/style)
- [AWS - No oficial](https://github.com/rackerlabs/docs-aws/blob/master/docs/style-guidelines.md)
