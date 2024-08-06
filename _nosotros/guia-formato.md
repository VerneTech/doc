---
title: Guia de formato
layout: default
parent: About
nav_order: 3
---

# Guía de formato

La guía de formato está alineada con la guía de estilo. Mientras que la guía de estilo se enfoca en la semántica del contenido, la guía de formato busca estos objetivos:

| Sección | Descripción |
| --- | --- |
| **Consistencia** | Una guía de formato asegura que todas las publicaciones sigan el mismo estilo y formato. Esto proporciona una experiencia coherente para los lectores y hace que tu contenido sea más profesional. |
| **Claridad** | Las guías de formato a menudo incluyen reglas sobre gramática, puntuación y uso de palabras, lo que ayuda a mantener la claridad y la precisión en tu escritura. |
| **Accesibilidad** | Las guías de formato pueden incluir pautas para hacer que tu contenido sea accesible a una amplia gama de lectores, incluyendo personas con discapacidades visuales o auditivas. |
| **Eficiencia** | Cuando tienes una guía de formato a seguir, puedes producir contenido más rápidamente y con menos esfuerzo, ya que no tienes que tomar decisiones de estilo con cada nueva publicación. |
| **Marca** | Una guía de formato puede ayudar a reforzar tu marca al asegurar que todas tus publicaciones tengan un tono y estilo consistentes. |


---

<details open markdown="block">
  <summary>Tabla de Contenidos</summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---


## Headings


# Heading 1
## Heading 2
### Heading 3

```markdown
# Heading 1
## Heading 2
### Heading 3
```

## Buttons

[Link button](https://just-the-docs.com){: .btn }
[Link button](https://just-the-docs.com){: .btn .btn-purple }


```markdown
[Link button](https://just-the-docs.com){: .btn }
[Link button](https://just-the-docs.com){: .btn .btn-purple }
```

## Tables

| head1        | head two          | three |
|-------------:|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |


```markdown
| head1        | head two          | three |
|-------------:|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |
```

## Code


```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```


## Notas

{: .highlight }
A paragraph

{: .note }
A paragraph

{: .note-title }
> My note title
> 
> A paragraph with a custom title callout


```markdown
{: .highlight }
A paragraph

{: .note }
A paragraph

{: .note-title }
> My note title
> 
> A paragraph with a custom title callout

```

## Orden y navegación
```markdown
---
layout: default
title: Customization
nav_order: 1
---
```

Excluir páginas
```markdown
nav_exclude: true
```

Páginas padre:
```markdown
---
layout: default
title: UI Components
nav_order: 2
has_children: true
---
```

Páginas hijo
```markdown
---
layout: default
title: Buttons
parent: UI Components
nav_order: 2
---
```

## Imagenes

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png" style="width: 50px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png" style="width: 100px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png" style="width: 250px">
![style="width: 25px"](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png)


```markdown
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png" style="width: 50px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png" style="width: 100px">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png" style="width: 250px">
![style="width: 25px"](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/2560px-Microsoft_Azure_Logo.svg.png)
```


## Otros elementos a considerar
- [Colors](https://just-the-docs.com/docs/utilities/color/)
- [Fonts](https://just-the-docs.com/docs/utilities/typography/)
- [Ordering](https://just-the-docs.com/docs/navigation-structure/)
- [Search configuration .yml](https://just-the-docs.com/docs/search/)
- [Practical example to implement collections](https://pdmosses.github.io/just-the-docs/)
