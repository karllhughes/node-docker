# Node Twitter Docker - Challenge 1
The first challenge has several parts, but they are ideally designed to be done sequentially.

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

1. Run an `alpine` Docker container that tails a file using flags to:
    - Name the container
    - Run the container in detached mode
    - Hint: To keep the container running, use the command `tail -f /dev/null`. Your whole Docker run command will look something like this: `docker run ...FLAGS_HERE... alpine tail -f /dev/null`.
    - Hint 2: Review the [`docker run` command docs](https://docs.docker.com/engine/reference/commandline/run/) for details on the flags available.
2. View all running containers with `docker ps`
3. View the logs of the running container using `docker logs` (there may not be anything in the file)
4. Execute a `echo "Hello"` from the running container using `docker exec`
5. Inspect the running container using `docker inspect`
6. Stop and remove the container
7. Run an `ubuntu` Docker container, using flags to:
    - Run in "interactive" or pseudo-TTY mode
    - Set a "working directory"
    - Add an environment variable to the container
    - Run a `bash` shell command
    - Automatically remove the container when it is stopped
8. From within the docker container, output the contents the environment variable you added (using `echo $YOUR_ENV_VARIABLE`)
9. Exit the container
10. Use image tags to run a Docker container that outputs the current version of Node being used.
    - Using a *Node 10* Docker image
    - Using a *Node 8* Docker image
11. Run the `hello.js` file by mounting it into a Node Docker container using the [-v flag](https://docs.docker.com/engine/reference/commandline/run/#mount-volume--v---read-only).
