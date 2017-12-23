FROM node:9.3.0

RUN mkdir -p /app
WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve
CMD serve -s build
EXPOSE 5000

COPY package*.json /app/
RUN npm install && npm run build --production
