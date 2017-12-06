FROM node:carbon

WORKDIR /work

COPY package*.json ./
RUN npm install

COPY . $WORKDIR

EXPOSE 8080
RUN npm run build