FROM node:9.3.0

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm install

EXPOSE 3000
ENV BIND_HOST=0.0.0.0
CMD ["npm", "start"]
