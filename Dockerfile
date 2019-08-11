FROM node:11

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

ENV SECRET='abadjadjadja1223232412424'

# Copy app source code
COPY . .

# Expose port
EXPOSE 8080

# Run the application
CMD [ "npm", "start" ]
