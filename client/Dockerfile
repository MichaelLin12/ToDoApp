FROM node:19-alpine

WORKDIR /client/

COPY public/ /client/public
COPY src/ /client/src
COPY package.json /react-docker-example/

RUN npm install

CMD ["npm","start"]