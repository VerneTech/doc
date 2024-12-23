(async function () {
    const authorsJsonPath = '/doc/assets/authors/authors-list.json'; // Ruta al JSON
    const templatePath = '/doc/assets/authors/author-template.html'; // Ruta a la plantilla
      
    async function loadAuthor(authorId, containerId) {
      try {
        // Cargar datos del autor y la plantilla
        const [authorsResponse, templateResponse] = await Promise.all([
          fetch(authorsJsonPath).then(res => res.json()),
          fetch(templatePath).then(res => res.text())
        ]);
  
        const author = authorsResponse.find(a => a.key == authorId);
        if (author) {
          let template = templateResponse;
          // 3 veces por valor para que pueda reemplazarse hasta 3 veces
          template = template.replace('{{avatar_url}}', author.avatar_url)
            .replace('{{avatar_url}}', author.avatar_url)
            .replace('{{avatar_url}}', author.avatar_url)
            .replace('{{full_name}}', author.name)
            .replace('{{full_name}}', author.name)
            .replace('{{full_name}}', author.name)
            .replace('{{bio}}', author.bio)
            .replace('{{bio}}', author.bio)
            .replace('{{bio}}', author.bio)
            .replace('{{github_url}}', author.github_url)
            .replace('{{github_url}}', author.github_url)
            .replace('{{github_url}}', author.github_url)
            .replace('{{linkedin_url}}', author.linkedin_url)
            .replace('{{linkedin_url}}', author.linkedin_url)
            .replace('{{linkedin_url}}', author.linkedin_url);
  
          document.getElementById(containerId).innerHTML = template;
        } else {
          console.error(`User key "${authorId}" not found.`);
        }
      } catch (error) {
        console.error('Error loading the author:', error);
      }
    }
  
    // Detectar todos los contenedores con autores dinámicos
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-author-id]').forEach(container => {
        const authorId = container.dataset.authorId;
        const containerId = container.id;
        if (authorId && containerId) {
          loadAuthor(authorId, containerId);
        }
      });
    });
  })();
  