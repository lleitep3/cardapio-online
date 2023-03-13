# Cardapio API

## Description

It's the api for the cardapio online project.

### Requirements
  - docker (all resources are conteinerized)
  - docker-compose (to run the local environment)

## Installation
Just run `docker compose up`.


### References

#### AWS ECR
```shell
$ aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 595229698287.dkr.ecr.us-east-1.amazonaws.com/cardapio-api
```
