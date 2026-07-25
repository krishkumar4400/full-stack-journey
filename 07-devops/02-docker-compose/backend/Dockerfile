FROM node:18-alpine

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD [ "node", "server.js" ]
