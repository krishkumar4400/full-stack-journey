FROM node:20-alpine

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY server.js .

CMD [ "node", "server.js" ]
