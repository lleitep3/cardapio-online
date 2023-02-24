FROM nginx:1-alpine@sha256:6f94b7f4208b5d5391246c83a96246ca204f15eaf7e636cefda4e6348c8f6101

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./includes/ /etc/nginx/includes/

COPY ./ssl/ /etc/ssl/certs/nginx/

