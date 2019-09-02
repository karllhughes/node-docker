FROM node:12

WORKDIR /usr/src/app

# Environment variables
ENV SECRET='4cvaabs41buCDDvs6OKIT813Xj8Z88Do'
ENV NODE_ENV='development'

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Run the application
CMD [ "npm", "start" ]
