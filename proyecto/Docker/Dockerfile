
FROM node:16.13.0

WORKDIR /usr/src/app

COPY imagen/package*.json ./

RUN npm install -g npm@9.5.1

RUN npm install

COPY imagen .

ENV         TZ                America/Mexico_City
RUN         ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 8080
CMD [ "npm", "start" ]