#! /bin/bash

rm ./packages/nginx/ssl/* -rf

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./packages/nginx/ssl/web.key -out ./packages/nginx/ssl/web.crt -subj "/C=BR/ST=SP/L=São Paulo/O=Menu Online/OU=lleitep3/CN=example.com"

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./packages/nginx/ssl/server.key -out ./packages/nginx/ssl/server.crt -subj "/C=BR/ST=SP/L=São Paulo/O=Menu Online/OU=lleitep3/CN=example.com"

