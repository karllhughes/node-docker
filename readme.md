# Node Twitter Docker - Challenge 4
In the third challenge, you will run a database and web container linked on a common network. After this exercise, you'll be able to see a working application at `localhost:3000`.

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

Record your solutions here or in a new document. You may be asked to share your solution with the class.

1. Build a Docker image called `node-twitter-docker` using the `Dockerfile` in the root directory of this project.
2. Create a Docker network called `mynet`.
3. Run a MongoDB container with flags for the following options:
    - Name the container `mongo`
    - Run the container in detached mode
    - Connect the container to the `mynet` network
    - Use a bind mount (volume) to save the database files (located at `/data/db`) in a in the `./data` directory in this project
    - Make sure the container is running using `docker ps`
    - Hint: Review the solution to Challenge 2 if you get stuck
    - Hint 2: Review the [Docker networking documentation](https://docs.docker.com/network/bridge/#connect-a-container-to-a-user-defined-bridge) if you don't remember how to connect to a network.
4. Run the `node-twitter-docker` image you just created in part 1 with flags for the following:
    - Name the container `web`
    - Expose port 3000 to your localhost
    - Run the container in "interactive" mode
    - Connect the container to the `mynet` network
    - If this worked, you should not see an error about connecting to MongoDB this time, and the Twitter clone should be up and running at `localhost:3000`
    - Hint: Review the solution to Challenge 3 if you get stuck
5. Stop and remove the `web` container from part 4.
6. Bonus: Re-run the `web` container, but this time:
    - Run the container in "detached" mode instead of "interactive" mode
    - Mount the `./app` directory on your local machine as a bind mount to the `/usr/src/app/app` directory in the container
7. Bonus 2: After the `web` container is running again:
    - Use `docker logs` with the "follow" option to tail the `web` container's logs 
    - Change a file in the `./app` directory on your local machine
    - Ensure that the build process is triggered and that the change takes effect
8. When all parts are complete, stop and remove both the Docker containers and the network.
