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

# Construir el proyecto para producción
RUN npm run build

# Exponer el puerto del servidor
EXPOSE 80

# Nginx ya incluye un comando CMD por defecto, no necesitas añadir uno
CMD [ "npm","start" ]
