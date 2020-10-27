FROM node:14-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
#COPY . .
COPY src /app/src
COPY public /app/public
RUN ls
#EXPOSE 8080
CMD ["npm","start"]
