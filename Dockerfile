# Build stage
FROM alpine:3.11 as build
LABEL maintainer=william16180@gmail.com

RUN apk update && apk add --no-cache yarn

COPY package.json /app/
WORKDIR /app
RUN yarn && yarn upgrade

COPY . /app

RUN yarn build --modern

# Production stage
FROM nginx:1.17-alpine as prod
LABEL maintainer=william16180@gmail.com

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.server.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
