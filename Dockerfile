FROM alpine:latest


WORKDIR /usr/src/app


COPY package*.json .


RUN npm install


COPY . . 


EXPOSE 3300


CMD ["node", "index.js"]

 
