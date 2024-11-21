const { DocumentStore } = require("ravendb");
const { httpsAgent, ravenDbUrl, database, pfx } = require("./httpsAgent");
const axios = require("axios");

server_url = ravenDbUrl;
database_name = database;
certificate = pfx;

const authOptions = {
  certificate: pfx,
  type: "pfx",
  password: "",
};

store = new DocumentStore([server_url], database_name, authOptions);

store.initialize();

module.exports = { store };
