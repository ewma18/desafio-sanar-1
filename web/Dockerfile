FROM node:14

LABEL org.opencontainers.image.title="sanar-challenge-webapp"

WORKDIR /usr/src/app

COPY ./web/package.json . 

RUN npm install --production

COPY ./web .

EXPOSE 3000

CMD [ "npm", "start" ]
