FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install --only=production
EXPOSE 3000
CMD [ "node", "server" ]
# RUN npm run start.docker