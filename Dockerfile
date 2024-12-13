FROM node:14

WORKDIR /usr/src/app/learnalgo-website

COPY learnalgo-website/package*.json ./

RUN npm install

COPY learnalgo-website/ .

EXPOSE 3000

CMD ["npm", "start"]
