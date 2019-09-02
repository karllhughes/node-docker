# Node Twitter Docker - Challenge 6
Our 6th challenge centers around creating a new docker-compose file for continuous integration environments.

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

Record your solutions here or in a new document. You may be asked to share your solution with the class.

1. Create a `docker-compose.test.yml` file that accomplishes the following:
    - Uses the version 3.7 Docker Compose file format
    - Starts a `test` container that:
        - Uses the `./Dockerfile` as its image
        - Depends on and waits for the `mongo` container to start before it does
        - Runs the command `npm test` after the `mongo` container has run
    - Starts a `mongo` container that:
        - Uses the `mongo` Docker image
        - Mounts data from the local `data/` directory into Mongo's database filepath (see Challenge 2, 4)
    - Hint: Use the [Docker Compose file reference](https://docs.docker.com/compose/compose-file/) to find the appropriate configurations
2. Run the container with `docker-compose` such that:
    - The exit code of the `test` container is the exit code of the script
    - The containers are all stopped if any one is stopped
    - The image for the code is built every time the command runs
    - Hint: Refer to the [Docker Compose `up` CLI documentation](https://docs.docker.com/compose/reference/up/) to find the appropriate flags
