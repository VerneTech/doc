---
layout: default
title: Callouts
parent: Estilo
nav_order: 4
---

# Callouts
<details open markdown="block">
  <summary>Tabla de Contenidos</summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

New (v0.4.0)
{: .label .label-green }

Markdown does not include support for callouts. However, you can style text as a callout using a Markdown extension supported by kramdown: [*block IALs*](https://kramdown.gettalong.org/quickref.html#block-attributes).

Common kinds of callouts include `highlight`, `important`, `new`, `note`, and `warning`.

{: .warning }
These callout names are *not* pre-defined by the theme: you need to define your own names.

## An untitled callout

```markdown
{: .highlight }
A paragraph
```

{: .highlight }
A paragraph


## A single paragraph callout

```markdown
{: .note }
A paragraph
```

{: .note }
A paragraph

```markdown
{: .note-title }
> My note title
>
> A paragraph with a custom title callout
```

{: .note-title }
> My note title
>
> A paragraph with a custom title callout

## A multi-paragraph callout

```markdown
{: .important }
> A paragraph
>
> Another paragraph
>
> The last paragraph
```

{: .important }
> A paragraph
>
> Another paragraph
>
> The last paragraph

```markdown
{: .important-title }
> My important title
>
> A paragraph
>
> Another paragraph
>
> The last paragraph
```

{: .important-title }
> My important title
>
> A paragraph
>
> Another paragraph
>
> The last paragraph

## An indented callout

```markdown
> {: .highlight }
  A paragraph
```

> {: .highlight }
  A paragraph

## Indented multi-paragraph callouts

```markdown
> {: .new }
> > A paragraph
> >
> > Another paragraph
> >
> > The last paragraph
```

> {: .new }
> > A paragraph
> >
> > Another paragraph
> >
> > The last paragraph


## Nested callouts

```markdown
{: .important }
> {: .warning }
> A paragraph
```

{: .important }
> {: .warning }
> A paragraph

## Opaque background

```markdown
{: .important }
> {: .opaque }
> <div markdown="block">
> {: .warning }
> A paragraph
> </div>
```

{: .important }
> {: .opaque }
> <div markdown="block">
> {: .warning }
> A paragraph
> </div>