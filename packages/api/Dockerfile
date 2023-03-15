FROM node:19-alpine3.17@sha256:667dc6ed8fc6623ccd21cb5fa355c90f848daaf5d6df96bc940869bfdf91c19a AS base

WORKDIR /app

COPY ./package.json .
COPY ./tsconfig.json .
COPY ./jest.config.js .
COPY ./yarn.lock .
COPY ./src ./src

RUN yarn

# ###### Tests Image
FROM base AS test

ENV NODE_ENV test

CMD [ "sh", "-c", "yarn test"]

# ###### Local Image
FROM base AS local

ENV NODE_ENV local

CMD ["sh", "-c", "yarn dev"]

# ###### Production Image
FROM node:19-alpine3.17@sha256:667dc6ed8fc6623ccd21cb5fa355c90f848daaf5d6df96bc940869bfdf91c19a AS production
WORKDIR /app

ENV NODE_ENV production

COPY --from=base /app/package.json /app/package.json
COPY --from=base /app/src /app/src
COPY --from=base /app/node_modules /app/node_modules

# CMD ["sh", "-c", "yarn start"]
CMD ["sh", "-c", "yarn start"]