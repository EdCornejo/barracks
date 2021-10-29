FROM node:14-alpine

WORKDIR /app

COPY ./public ./public

COPY ./src ./src

COPY tsconfig.json ./

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

# RUN yarn build

RUN yarn global add serve
