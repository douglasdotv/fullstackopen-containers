FROM node:lts-bullseye-slim

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
