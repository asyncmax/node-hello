FROM node:10-alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json ./
RUN yarn install --production --frozen-lockfile

COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "index.js"]
