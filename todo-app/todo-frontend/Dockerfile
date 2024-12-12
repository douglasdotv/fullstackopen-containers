FROM node:lts-bullseye AS build-stage

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

FROM build-stage AS test

ENV NODE_ENV=test

RUN npm test -- --watch=false

FROM nginx:stable-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
