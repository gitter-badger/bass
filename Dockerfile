FROM node:11-alpine
WORKDIR /app
COPY ./package.json ./yarn.lock .
RUN yarn
COPY . .
RUN yarn run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
