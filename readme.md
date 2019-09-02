# Node Twitter Docker - Challenge 5
In the fifth challenge, you will repeat the outcome of the Challenge 4 using Docker Compose. After this exercise, you'll be able to see a working application at `localhost:3000`.

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

Record your solutions here or in a new document. You may be asked to share your solution with the class.

1. Create a `docker-compose.yml` file that accomplishes the following:
    - Uses the version 3.7 Docker Compose file format
    - Starts a `web` container that:
        - Uses the `./Dockerfile` as its image
        - Exposes port 3000
        - Bind mounts the `app/`, `config/`, and `public/` directories into their corresponding paths in the container
        - Depends on and waits for the `mongo` container to start before it does
    - Starts a `mongo` container that:
        - Uses the `mongo` Docker image
        - Mounts data from the local `data/` directory into Mongo's database filepath (see Challenge 2, 4)
        - Exposes port 27017
    - Hint: Use the [Docker Compose file reference](https://docs.docker.com/compose/compose-file/) to find the appropriate configurations
2. Bring up the containers in detached mode using `docker-compose`
3. View the status of the running containers with `docker ps`
4. Tail the logs of the running containers
5. Change a file in the `app/` or `public/` directory, confirm that the app is rebuilt and changes are made
6. When all parts are complete, stop the containers using `docker-compose down`
7. Bonus: Update your `docker-compose.yml` file so that there are two Node containers running on two different ports (3000, 3001)
