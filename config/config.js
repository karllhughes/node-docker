const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;
const database = process.env.MONGO_INITDB_DATABASE;

module.exports = {
  development: {
    db: "mongodb://mongo/ntwitter",
    root: rootPath,
    app: {
      name: "Node Twitter"
    },
    github: {
      clientID: "e3930cf94c772ba10ef1",
      clientSecret: "fb1284b1874444a9c0c55c963092f836596ecc56",
      callbackURL: "http://localhost:3000/auth/github/callback"
    }
  },
  production: {
    db: `mongodb://${username}:${password}@mongo/${database}`,
    root: rootPath,
    app: {
      name: "Node Twitter"
    },
    github: {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://nitter.herokuapp.com/auth/github/callback"
    }
  }
};
