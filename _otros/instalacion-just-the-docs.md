---
title: Instalación 101 - Just the Docs
layout: default
parent: Menu - Comunidad
nav_order: 1
---

Resumen rápido de cómo instalar Just the Docs. Instrucciones fáciles para instalar jekyll en local.

# Instalación 101 - Just the Docs

Integrar este modelo de documentación en github es sencillo:

- Habilitar [github pages - resumen](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- Instalar github pages con [Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll)
    - Prerequisitos
      - Install Ruby. For more information, see "Installing Ruby" in the Ruby documentation
      - Install Bundler. For more information, see "Bundler."
    - Instalar bundle

- Sincronizar el sitio con [VS Code](https://code.visualstudio.com/docs/sourcecontrol/overview)
- Una vez sincronizado, editar desde VS Code
- Si instalaste bien Ruby, y Bundler, ejecutando esto desde linea de comando: 
```markdown
bundle exec jekyll serve
```
Deberia aparecerte algo como esto:
```markdown
Configuration file: C:/Users/erincon/Sources/doc/_config.yml
            Source: C:/Users/erincon/Sources/doc
       Destination: C:/Users/erincon/Sources/doc/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 4.777 seconds.
  Please add the following to your Gemfile to avoid polling for changes:
    gem 'wdm', '>= 0.1.0' if Gem.win_platform?
 Auto-regeneration: enabled for 'C:/Users/erincon/Sources/doc'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```
- Haz click en [localhost](http://127.0.0.1:4000), y debería abrir tu sitio con el nuevo estilo.
- El proceso de publicación es transparente; commit de archivos a rama de github, publicar, y eventualmente refrescará tu sitio de github.



