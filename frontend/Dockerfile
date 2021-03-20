FROM node:alpine AS build-stage
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
