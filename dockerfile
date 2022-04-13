FROM node:latest
COPY . .
USER root
RUN apt-get update
RUN apt-get install nodejs -y
CMD node index.js