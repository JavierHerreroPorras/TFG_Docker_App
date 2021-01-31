# Dockerfile for client

# Stage 1: Build vue client
FROM alpine:3.10

ENV NODE_VERSION 14.15.4

# Working directory be app
WORKDIR /usr/app

COPY package*.json ./

# Install dependencies
RUN apk add --update npm
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","run","serve"]