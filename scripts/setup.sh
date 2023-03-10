#! /bin/bash

rm ./packages/proxy/nginx/ssl/* -rf

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./packages/proxy/nginx/ssl/web.key -out ./packages/proxy/nginx/ssl/web.crt -subj "/C=BR/ST=SP/L=São Paulo/O=Menu Online/OU=lleitep3/CN=cardapio.local"

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./packages/proxy/nginx/ssl/server.key -out ./packages/proxy/nginx/ssl/server.crt -subj "/C=BR/ST=SP/L=São Paulo/O=Menu Online/OU=lleitep3/CN=cardapio.local"

