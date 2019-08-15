FROM node:10.16.0

COPY . /app
WORKDIR /app

RUN rm -rf src/node_modules/
RUN node -v
RUN npm -v
RUN npm install

EXPOSE 3000

CMD ["sh", "npm start",]