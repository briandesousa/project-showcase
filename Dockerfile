FROM node:14.2

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

ENV NODE_ENV production
ENV PORT 8080

COPY package*.json ./
USER node
RUN npm install

COPY --chown=node:node . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "server.js" ]