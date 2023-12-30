FROM node:18.16.0

WORKDIR /usr/src/app

COPY package*.json ./app


RUN npm install


COPY . . 


EXPOSE 3300


CMD ["npm", "run", "start"]

 