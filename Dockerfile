# Etapa de construcción
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

# Instala dependencias de producción y build
RUN npm install --omit=dev && npm run build

# Etapa final
FROM node:18-alpine

# Crea el directorio de la app
WORKDIR /app

# Copia desde la etapa anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Expone el puerto NestJS (por defecto 3000)
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "dist/main"]
