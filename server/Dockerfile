# IMPORTANTE: Cada imagen Docker debe dedicarse a un elemento en concreto (NodeJS y Express, MongoDB, Vue, etc) ya que si lo ponemos todo en una misma imagen los tiempos de compilación son más largos, las imágenes son más pesadas, podemos tener problemas con procesos zombies, etc. Para ello surge el concepto de Docker-Compose.

# IMPORTANTE2: Este dockerfile solo ejecutará el servicio de Express. Para ejecutar MongoDB hay que realizar un Docker-compose.
#  Dockerfile for Node Express Backend api (development)

# FROM: Especifica la base para la imagen
FROM alpine:3.10

ENV NODE_VERSION 14.15.4

# ARG: Permite definir una variable usable en el resto del Dockerfile con la sintaxis ${NOMBRE_DEL_ARG}
# ARG NODE_ENV=development

# RUN: nos permite ejecutar comandos en el contenedor
#	En primer lugar creamos una carpeta, y posteriormente trabajaremos en ella (cambiamos el directorio de trabajo con workdir)
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# COPY: Copia archivos y directorios al contenedor.
# En este caso estamos copiando los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Requiere package-lock.json presente.
# Lanza un error si las dependencias no coinciden con las de package.json.
# Elimina node_modules e instala todas las dependencias a la vez.
RUN apk add --update npm                       
RUN npm ci

# Copia el proyecto entero en el contenedor
COPY . .

# Indica el puerto que el contenedor escucha
EXPOSE 8080

# CMD: Se encarga de ejecutar comandos
CMD ["npm","start"]
