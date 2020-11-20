# Build
FROM node:15.1.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Run
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/* /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]