# Build stage
FROM node:20-alpine AS builder

WORKDIR /li_gavin_ui_garden_build_checks

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Run quality checks
RUN npm run lint
RUN npm test -- --watchAll=false

# Build Storybook (not React app)
RUN npm run build-storybook

# Production stage
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy Storybook build instead of React build
COPY --from=builder /li_gavin_ui_garden_build_checks/storybook-static /usr/share/nginx/html

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]