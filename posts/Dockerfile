#base docker file -> you may want to use as light base image as possible
FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm","start"]