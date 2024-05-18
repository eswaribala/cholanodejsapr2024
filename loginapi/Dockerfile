FROM node:alpine
WORKDIR /usr/loginapp
COPY package*.json ./
RUN npm install --force
COPY . . 
EXPOSE 3400
CMD npm start 3400
