FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --force
COPY . . 
EXPOSE 3600
CMD npm start 3600
