FROM node:18

WORKDIR /api

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 5050

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]