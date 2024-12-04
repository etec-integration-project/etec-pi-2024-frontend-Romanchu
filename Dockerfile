# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios para instalar dependencias
COPY package.json ./
COPY package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

RUN npm install -g serve

# Construir el proyecto para producción
RUN npm run build

# Exponer el puerto del servidor
EXPOSE 3000

# Nginx ya incluye un comando CMD por defecto, no necesitas añadir uno
CMD ["serve", "-s", "build"]
