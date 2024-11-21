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

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar los archivos generados en la etapa de construcción al contenedor Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto del servidor
EXPOSE 80

# Nginx ya incluye un comando CMD por defecto, no necesitas añadir uno
