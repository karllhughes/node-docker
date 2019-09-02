# Node Twitter Docker - Answer Key
No peeking! 👀

## Challenge 1

Part 1
```
docker run --name=harry -d alpine tail -f /dev/null
```

Part 2 - 6
```
docker ps

docker logs harry (-f)

docker exec harry echo "Hello"

docker inspect harry

docker rm -f harry
OR
docker stop harry && docker rm harry
```

Part 7 - 9
```
docker run -it -w /home -e HELLO_WORLD="Hey World" --rm ubuntu bash

root@ac8014cd8a13:/home# echo $HELLO_WORLD

> Hey World

root@ac8014cd8a13:/home# exit
```

Part 10
```
docker run node:10 node -v
docker run node:8 node -v
```

Part 11
```
docker run -v `pwd`:`pwd` -w `pwd` node:10 node hello.js
```

## Challenge 2

Part 1
```
docker run -v `pwd`/data:/data/db --rm -d --name=database mongo
```

Part 2
```
docker exec -it database mongo --eval 'db.test_collection.insert({ name: "Karl", location: "Chicago" }, { name: "Steven", location: "West Berlin" }, {name: "Sue", location: "Pennsylvania"})'
```

Part 3
```
docker rm -f database
```

Part 4
```
docker run -v mongo-data:/data/db --rm -d --name=database -p 37017:27017 mongo
```

Part 5

_Open Robo 3T_

## Challenge 3

Part 1
```
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
```

Part 2
```
data/
.git
.idea
.DS_Store
npm-debug.log
.secrets
**/node_modules
```

Part 3
```
docker build -t karllhughes/node-twitter-docker .
```

Part 4
```
docker run -it -p 3000:3000 karllhughes/node-twitter-docker
```

## Challenge 4

Part 1 - 2

```
docker build -t node-twitter-docker .

docker network create mynet
```

Part 3 - 5

```
docker run -v `pwd`/data:/data/db --network mynet --rm -d --name=mongo mongo

docker run -p 3000:3000 --rm -it --network mynet --name=web node-twitter-docker

(control + C)
docker rm -f web
```

Part 6 - 8

```
docker run -p 3000:3000 --rm -d --network mynet --name=web -v `pwd`/app:/usr/src/app/app node-twitter-docker

docker logs -f web mongo

(control + C)
docker rm -f web mongo && docker network rm mynet
```

## Challenge 5

Part 1

```
version: "3.7"
services:
  web:
    build: .
    ports:
    - "3000:3000"
    volumes:
    - ./app:/usr/src/app/app
    - ./config:/usr/src/app/config
    - ./public:/usr/src/app/public
    depends_on:
    - mongo
    command: ["./scripts/wait-for-it.sh", "mongo:27017", "--", "npm", "start"]
  mongo:
    image: mongo
    volumes:
    - ./data:/data/db
    ports:
    - "27017:27017"
```

Part 2 - 4

```
docker-compose up -d

docker ps

docker-compose logs -f
```

Part 5

Change any file in `./app` or `./public`

Part 6

```
docker-compose down
```

Part 7

```
version: "3.7"
services:
  web1:
    build: .
    ports:
    - "3000:3000"
    depends_on:
    - mongo
    command: ["./scripts/wait-for-it.sh", "mongo:27017", "--", "npm", "start"]
  web2:
    build: .
    ports:
    - "3001:3000"
    depends_on:
    - mongo
    command: ["./scripts/wait-for-it.sh", "mongo:27017", "--", "npm", "start"]
  mongo:
    image: mongo
    volumes:
    - ./data:/data/db
    ports:
    - "27017:27017"
```

## Challenge 6

Part 1

```
version: "3.7"
services:
  test:
    build: .
    depends_on:
    - mongo
    command: ["./scripts/wait-for-it.sh", "mongo:27017", "--", "npm", "test"]
  mongo:
    image: mongo
    volumes:
    - ./data:/data/db
```

Part 2

```
docker-compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from test --build
```

## Challenge 7
TBD

