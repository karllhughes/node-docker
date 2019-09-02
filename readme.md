# Node Twitter Docker - Challenge 7
In the 7th Challenge, you will prepare our app for a production deployment in Docker containers. By the end of this tutorial, you should be able to access the app at `localhost:3000` or on a DigitalOcean droplet at the IP address you are given.

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

Record your solutions here or in a new document. You may be asked to share your solution with the class.

1. Create a new `Dockerfile.prod` based on the original `Dockerfile` that includes instructions to:
    - Set the `NODE_ENV` to `production` in the Dockerfile, remove any other environment variables
    - Run `npm install` with the `--production` flag
    - Switch the user to `node`
    - Set the final command to `node server.js`
2. Create a new `docker-compose.prod.yml` file based on the original `docker-compose.yml` file which makes the following adjustments:
    - Use the new production Dockerfile to build the `web` image
    - Set the `web` and `mongo` containers to restart on failure
    - Remove any code volumes
    - Enable the following environment variables in the `web` container:
        - MONGO_INITDB_ROOT_USERNAME
        - MONGO_INITDB_ROOT_PASSWORD
        - MONGO_INITDB_DATABASE
        - ROOT_DOMAIN
        - SECRET
        - GITHUB_CLIENT_ID=e3930cf94c772ba10ef1
        - GITHUB_CLIENT_SECRET=fb1284b1874444a9c0c55c963092f836596ecc56
    - Enable the following environment variables in the `mongo` container:
        - MONGO_INITDB_ROOT_USERNAME
        - MONGO_INITDB_ROOT_PASSWORD
        - MONGO_INITDB_DATABASE
    - Hint: Use the [Docker Compose file reference](https://docs.docker.com/compose/compose-file/) to find the appropriate configurations
3. Run the new `docker-compose.prod.yml` file with secure environment variables
    - MONGO_INITDB_ROOT_USERNAME - Select a username
    - MONGO_INITDB_ROOT_PASSWORD - Select a strong password
    - MONGO_INITDB_DATABASE - Select a database name
    - ROOT_DOMAIN - Whatever root domain or IP address you're using, eg: `http://localhost:3000` (for local development) or `http://167.71.111.237` (for a public IP/droplet)
    - SECRET - Select a strong random string
4. Bonus: Provision a new DigitalOcean droplet, and deploy the app to it.
    - Hint: Once provisioned, you should SSH into the server, clone the Github repository, and then run the Docker commands as you did locally.
