FROM node:18-alpine
RUN apk add --no-cache bash

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build && \
    npm install -g serve

ENV PORT 3000

EXPOSE $PORT

CMD serve -s build -l $PORT