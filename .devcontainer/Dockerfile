# Usa una imagen base de Ruby con una versión específica
FROM ruby:3.1

# Instala dependencias necesarias
RUN apt-get update && apt-get install -y \
    git \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Instala Jekyll y Bundler
RUN gem install bundler jekyll

# Crea un directorio de trabajo
WORKDIR /docs

# Expone el puerto 4000 para Jekyll
EXPOSE 4000

# Comando por defecto para iniciar el contenedor
CMD ["/bin/bash"]
