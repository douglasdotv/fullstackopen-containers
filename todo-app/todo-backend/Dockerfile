FROM node:lts-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init \
    && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

RUN npm ci --omit=dev

COPY --chown=node:node . .

USER node

ENV PORT 3000

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["node", "./bin/www"]
