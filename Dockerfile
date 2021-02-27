FROM nginx:latest
COPY dist/personal-site/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf