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


## Resources
  - [server](./server/README.md)
  - [web](./web/README.md)

## Technologies
  - yarn workspaces
  - docker
  - docker-compose
  - python (flask)
  - typescript (react)
  - nginx