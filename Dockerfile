# for build only
FROM node:lts-jessie

WORKDIR /blog
COPY . .

RUN yarn install

EXPOSE 8000

CMD ["yarn", "run", "build"]
