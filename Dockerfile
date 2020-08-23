FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

## install and build configuration file
RUN npm install && npm run compile

EXPOSE 3030

ENV PORT=3030

CMD node lib
