FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy your web files into nginx's serving directory
COPY . /usr/share/nginx/html

EXPOSE 80
