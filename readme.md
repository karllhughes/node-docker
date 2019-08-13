# Node Twitter Docker

This project was specifically branched off the wonderful [Node Twitter](https://github.com/vinitkumar/node-twitter) 
project for use as a part of a workshop designed to teach Node/Javascript developers about Docker.

By the end of this tutorial, you should have a working Twitter clone:

<img src="https://cldup.com/smoNHY-9mI.png">
<img src="https://cldup.com/oEa3EIGhyJ.png">

You can support the original project (Node Twitter) here: https://opencollective.com/node-twitter

## Prerequisites

You are required to have Docker installed if you'd like to run the app locally.

- Docker for Mac: https://hub.docker.com/editions/community/docker-ce-desktop-mac
- Docker for Windows: https://hub.docker.com/editions/community/docker-ce-desktop-windows
- Docker for Linux: https://docs.docker.com/install/linux/docker-ce/ubuntu/

You should also have access to a terminal (bash preferred) and text editor. While not 
necessarily required, some familiarity with Javascript and Node will be helpful.

Finally, if you'd like to deploy this project to a production server, use [DigitalOcean](https://m.do.co/c/888fefc32a01).
If you don't have an account, get $50 in credit free by signing up with this link: 
[https://m.do.co/c/888fefc32a01](https://m.do.co/c/888fefc32a01)

## Getting Started

Clone this repository (or fork it into your Github account and then clone it): `git clone https://github.com/karllhughes/node-twitter-docker`

Switch to the branch you'd like to start learning from. The lessons are numbered, so if you're brand new to Docker,
I'd recommend starting with the first one.

Follow the instructions on that branch's `readme.md` file.

## Cheat Sheet

If you don't want to follow the steps, and you just want to skip right to the end, follow the instructions 
below to get this app up and running.

### Local Development

- Run the containers: `docker-compose up`

The site should be running at [localhost:3000](http://localhost:3000/)

### Continuous Integration

- Build the Docker image fresh and run the tests: `bash scripts/test.sh`

After the tests run, the command should return an error code 0. To check this, enter `echo $?` into your terminal.

### Production Deployment

This portion of the tutorial uses requires a web hosting service with Docker installed. 
[DigitalOcean](https://www.digitalocean.com/) is a good option.

- Create a Droplet or server (process varies based on the host you use)
- SSH into your new server: `ssh <USERNAME>@<IP_ADDRESS>`
- Clone the project: `git clone https://github.com/karllhughes/node-twitter-docker`
- Run the production docker-compose file with all the secure ENV variables: 

```
MONGO_INITDB_ROOT_USERNAME=<DB_USERNAME> \
  MONGO_INITDB_ROOT_PASSWORD=<DB_PASSWORD> \
  SECRET=<A_LONG_RANDOM_STRING> \
  ... \
  docker-compose -f docker-compose.prod.yml up -d
```

The site should be running at `http://<IP_ADDRESS>/`.

## License
[Apache License 2.0](https://github.com/vinitkumar/node-twitter/blob/master/License)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvinitkumar%2Fnode-twitter.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvinitkumar%2Fnode-twitter?ref=badge_large)

## Important

Twitter is a registered trademark of Twitter Inc. This project is just for learning purposes and should be treated as such.
