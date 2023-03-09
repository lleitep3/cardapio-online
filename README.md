# Cardapio online

## Description

it's an online menu for restaurants, where the customer can order food and drinks, and the restaurant can manage the orders.

### Requirements
  - docker (all resources are conteinerized)
  - docker-compose (to run the local environment)
  - bash (for to setup script)
  - node (for to run yarn commands)


## Installation

### Setup
  *sudo permission are necessary to run the setup script.*

```bash
$ sudo yarn setup
```
The setup script will:
  - generate ssl files on `./nginx/ssl` folder


## Running
```bash
$ yarn start
```

## Resources
  - [proxy](./packages/nginx/README.md)
  - [server](./packages/server/README.md)
  - [web](./packages/web/README.md)


## Technologies
  - yarn
  - yarn workspaces
  - docker
  - docker compose
  - nginx
  - python (flask)
  - typescript (react)
  - vite


## Project Links
  - [dbdiagram](https://dbdiagram.io/d/63fbee23296d97641d83dc78)
  - [github](https://github.com/lleitep3/cardapio-online)
  - [tasks](https://github.com/users/lleitep3/projects/2)