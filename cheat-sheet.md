## Cheat Sheet

If you don't want to follow the tutorials, and you just want to skip right to the end with a running app, 
follow the instructions below for local, CI, and production environments.

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
- Run the production docker-compose file with all the secure ENV variables and build the image: 

```
MONGO_INITDB_ROOT_USERNAME=... \
  MONGO_INITDB_ROOT_PASSWORD=... \
  MONGO_INITDB_DATABASE=... \
  SECRET=... \
  GITHUB_CLIENT_ID=... \
  GITHUB_CLIENT_SECRET=... \
  ROOT_DOMAIN=... \
  docker-compose -f docker-compose.prod.yml up --build -d
```

The site should be running at `http://<IP_ADDRESS>/`.
