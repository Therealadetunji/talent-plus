FROM node:16.13.2-alpine AS development

# Create app directory

WORKDIR /app

# Install app dependencies

COPY package.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
