# Node Twitter Docker - Challenge 2
The second challenge centers around using Docker volumes

If you get stuck, you can ask for help, or skip ahead to the next step and see if it can be done without the previous step.

Record your answers here or in a new document. You may be asked to share your solution with the class.

1. Run a MongoDB container with flags for the following options:
    - Name the container `database`
    - Run the container in detached mode
    - Use a bind mount (volume) to save the files in a in a `./data` directory in this project
    - Confirm the database container is running with `docker ps`.
    - Hint: Review the [Docker Volume docs](https://docs.docker.com/storage/volumes/) to see examples and all options available.
2. Create a collection and fill it with three records by executing the following Mongo CLI command in the container:

```bash
mongo --eval 'db.test_collection.insert({ name: "Karl", location: "Chicago" }, { name: "Steven", location: "West Berlin" }, {name: "Sue", location: "Pennsylvania"})'
```

You should see something like the following if it worked:

```bash
MongoDB shell version v4.0.5
connecting to: mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("6d9f16da-a30f-4219-bad8-df08f8818996") }
MongoDB server version: 4.0.5
WriteResult({ "nInserted" : 1 })
```

3. Stop the database container and remove it.
4. Run a new MongoDB container, this time use flags to:
    - Name the container `database`
    - Run the container in detached mode
    - Map port `27017` on the container with port `37017` on your local machine (Hint: read more on [port mapping here](https://docs.docker.com/config/containers/container-networking/)).
    - Use a named volume called `mongo-data` to save the database files
    - Check that the container is running and the port is being mapped by running `docker ps`
5. Bonus: if you have a local MongoDB client or an app like Robo3T installed, connect to the running MongoDB container via port 37017.
