---
title: Participantes
layout: default
parent: Estilo
nav_order: 9
---

# Quienes participan en este repositorio

<script src="/doc/assets/authors/load-author.js"></script>
<div id="author-container-1" data-author-id="JMMARTINEZE"></div>
<div id="author-container-2" data-author-id="JavierGoRo"></div>
<div id="author-container-3" data-author-id="JavierFrutos"></div>
<div id="author-container-4" data-author-id="MiroslavMitevVerne"></div>
<div id="author-container-5" data-author-id="erincon01"></div>

---

## Cómo añadir participantes

Los participantes tienen nombre, perfiles en github y linkedin, fotos, descripción de su perfil profesional.
La información de los participantes, se recoge en un archivo `.json` que se puede referenciar desde cualquier página de este repositorio.

### Añadir el participante al `json global` del repo

Editar el archivo `authors-list.json` ubicado en la carpeta `assests\authors\`  añadiendo el participante en cuestión:
  
```json
    {
      "key": "JavierGoRo",
      "name": "Javier",
      "bio": "---",
      "avatar_url": "https://avatars.githubusercontent.com/u/145021995?v=4",
      "github_url": "https://github.com/JavierGoRo",
      "linkedin_url": "---"
    }
```

### Añadir el participante a las publicaciones

Los participantes hacen publicaciones en archivos .md.
El participante debe añadirse como autor de la publicación. Para ello, la norma es añadir el autor al final de la publicación con este código (incluidos separadores):

```md
---

## Author

<div id="author-container" data-author-id="id_del_autor"></div>
<script src="/doc/assets/authors/load-author.js"></script>
```

**Nota**: Si la publicación tiene varios autores, se pueden poner varios div, pero los ids deben ser diferentes: `author-container-1`, `author-container-2`.

### [OPCIONAL] Añadir el participante a esta página `participantes.md`

Modificar el archivo parcicipantes.md ubicado en la carpeta `_varios` para que aparezca el autor.

```html
<script src="/doc/assets/authors/load-author.js"></script>
<div id="author-container-1" data-author-id="JMMARTINEZE"></div>
<div id="author-container-2" data-author-id="JavierGoRo"></div>
<div id="author-container-3" data-author-id="JavierFrutos"></div>
<div id="author-container-4" data-author-id="MiroslavMitevVerne"></div>
<div id="author-container-5" data-author-id="erincon01"></div>
```

**Nota**: el id del tag div debe ser único, sino habrá solapamiento. Si hay varios autores con el mismo div-id, sólo aparecerá el último.
