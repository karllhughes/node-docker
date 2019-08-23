# Node Twitter Docker - Challenge 3
In the third challenge, you will create your own Dockerfile and use it to run the Node Twitter app.

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

Record your solutions here or in a new document. You may be asked to share your solution with the class.

1. Create a file in the root of this project called `Dockerfile`. Include instructions to accomplish the following:
    - Extend the `node:12` base image
    - Specify `/usr/src/app` as the working directory
    - Add an environment variable called `SECRET` and set it equal to a long, random string of numbers
    - Set the `NODE_ENV` environment variable to `development`
    - Copy all the application files into the image 
    - Install the npm dependencies
    - Expose port 3000
    - Set the final command to execute `npm start`
    - Hint: The [Dockerfile reference](https://docs.docker.com/engine/reference/builder/) might come in handy if you don't remember all the instructions we covered.
2. Add a `.docker-ignore` file that ensures the following paths are not included in the Docker image:
    - Any editor-specific configuration files/directories
    - Local node modules directory
    - The `data/` directory (we'll be using this for the database later)
    - Any `.env` or secrets files you are using. 
2. Build a Docker image from your `Dockerfile`.
3. Run your Docker image as a container (it will likely fail as you don't have a database container running yet, but we'll fix that in the next challenge).
4. Bonus: Create an account on [Docker Hub](https://hub.docker.com/). Push your image to Docker Hub and have your partner pull the image and run it locally.
