(async function () {
  const authorsJsonPath = '/doc/assets/authors/authors-list.json'; // Ruta al JSON
  const templatePath = '/doc/assets/authors/author-template.html'; // Ruta a la plantilla

  async function loadAuthor(authorId, container) {
    try {
      const [authorsResponse, templateResponse] = await Promise.all([
        fetch(authorsJsonPath).then(res => res.json()),
        fetch(templatePath).then(res => res.text())
      ]);

      const author = authorsResponse.find(a => a.key === authorId);
      if (author) {
        // Reemplazo dinámico usando expresión regular
        const template = templateResponse.replace(/{{(.*?)}}/g, (_, key) => {
          const value = author[key.trim()];
          return value !== undefined ? value : ''; // Si no existe, retorna vacío
        });
        container.innerHTML = template;
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
      if (authorId) {
        loadAuthor(authorId, container);
      }
    });
  });
})();
