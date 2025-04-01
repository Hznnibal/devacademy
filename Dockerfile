FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
RUN npm install --legacy-peer-deps --omit=dev  # Installer uniquement les dépendances de production
EXPOSE 3000
CMD ["npm", "run", "start"]
