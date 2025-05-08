# Etapa 1: build da aplicação
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --production=false

COPY . .
RUN npm run build

# Etapa 2: imagem final para produção
FROM node:22-alpine AS runner

WORKDIR /app

# Instala apenas dependências de produção
COPY package*.json ./
RUN npm install --production

# Copia arquivos de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]