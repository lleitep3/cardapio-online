# Cardapio API

## Description

It's the api for the cardapio online project.

### Requirements
  - docker (all resources are conteinerized)
  - docker-compose (to run the local environment)

## Installation
Just run `docker compose up`.

## Scripts

```json
...
  "scripts": {
    // run the app
    "start": "ts-node src/app.ts --transpile-only",

    // run the app in dev mode
    "dev": "nodemon src/app.ts",

    // run the app in debug mode
    "lint": "eslint . --fix",

    // run the tests
    "test": "jest",

    // run the tests on container (as will work on build pipeline)
    "test:docker": "docker compose -f ./docker-compose.test.yml up --build --detach --remove-orphans"
  },
  ...
```

### Folder Structure

```bash
.
├── docker-compose.test.yml
├── docker-compose.yml
├── Dockerfile
├── jest.config.js
├── node_modules
├── package.json
├── prettier.config.json
├── README.md
├── src
│   ├── app.ts                            # entrypoint
│   ├── cardapio-translations.ts
│   ├── configs                           # all configs
│   │   └── config.ts
│   ├── entities                          # all entities
│   │   ├── Cardapio.entity.ts
│   │   └── Product.entity.ts
│   ├── externals                         # all externals
│   │   ├── api                           # all api (endpoints and controllers)
│   │   │   ├── cardapio.api.ts
│   │   │   ├── healthcheck.api.ts
│   │   │   └── i-api.ts
│   │   ├── mongodb                       # all mongodb resources
│   │   │   ├── Cardapio.model.ts
│   │   │   ├── connect.ts
│   │   │   └── Product.model.ts
│   │   └── repositories                  # all repositories
│   │       └── Cardapio.repository.ts
│   ├── interfaces                        # all interfaces
│   │   ├── i-cardapio-repository.ts
│   │   └── i-usecase.ts
│   ├── tests                             # all tests
│   │   └── usecases
│   │       ├── create-cardapio.test.ts
│   │       ├── delete-cardapio.test.ts
│   │       └── list-cardapios.test.ts
│   └── usecases                          # all usecases
│       ├── create-cardapio.ts
│       ├── delete-cardapio.ts
│       └── list-cardapios.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

```