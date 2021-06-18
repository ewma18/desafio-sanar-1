FROM node:14

LABEL org.opencontainers.image.title="sanar-challenge-api"

WORKDIR /usr/src/app

COPY ./api/package.json . 

RUN npm install --production

COPY ./api .

EXPOSE 8080

CMD [ "npm", "start" ]
