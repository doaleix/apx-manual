# --------------------------
# Stage 1: Build the Docusaurus site
# --------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files and build the static site
COPY . .
RUN npm run build

# --------------------------
# Stage 2: Serve with Nginx
# --------------------------
FROM nginx:stable-alpine

# Copy built static files to Nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Copy a custom nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
