FROM node:19-alpine3.17@sha256:667dc6ed8fc6623ccd21cb5fa355c90f848daaf5d6df96bc940869bfdf91c19a AS build

ENV NODE_ENV build

WORKDIR /app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn

# ###### Tests Image
FROM build AS test

COPY --from=build /app .

ENV NODE_ENV test

CMD [ "sh", "-c", "yarn test"]

# ###### Local Image
FROM node:19-alpine3.17@sha256:667dc6ed8fc6623ccd21cb5fa355c90f848daaf5d6df96bc940869bfdf91c19a AS local

ENV NODE_ENV local

WORKDIR /app

COPY --from=build /app .

CMD ["sh", "-c", "yarn dev"]