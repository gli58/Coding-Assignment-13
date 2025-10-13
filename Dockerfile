# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /li_gavin_ui_garden

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# --- Runtime stage ---
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /li_gavin_ui_garden/build /usr/share/nginx/html

EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
