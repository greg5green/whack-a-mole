FROM node:24.14.1-alpine AS build

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@10.32.1 && pnpm install --frozen-lockfile
COPY . .
RUN NODE_OPTIONS=--openssl-legacy-provider pnpm build:production

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
