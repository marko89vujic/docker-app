FROM node:14.21

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD node index.js
