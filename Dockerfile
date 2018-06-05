FROM node:8
ADD ./ /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["/app/docker-entrypoint.sh"]
