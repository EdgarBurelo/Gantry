FROM node:18-alpine
RUN apk add --no-cache bash

WORKDIR /app

COPY src ./src
COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install && \
    npm run build

ENV PORT 6006

EXPOSE $PORT

CMD node build/index.js