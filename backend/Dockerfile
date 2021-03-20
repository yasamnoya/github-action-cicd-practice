FROM node:alpine
COPY . .
RUN mv .env.docker .env
RUN npm i
CMD node index.js
