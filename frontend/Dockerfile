FROM node:14-alpine

WORKDIR /app

COPY ./public ./public

COPY ./src ./src

COPY tsconfig.json ./

COPY package.json ./

COPY yarn.lock ./

RUN yarn global add serve
# RUN yarn global add react-scripts
# RUN yarn global add typescript

RUN yarn install --frozen-lockfile

# RUN yarn build
