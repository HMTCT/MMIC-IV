const https = require("https");
const fs = require("fs");
const path = require("path");

const ravenDbUrl = "https://a.free.csdl.ravendb.cloud";
const database = "MMIC-IV";

const certPath = path.resolve(
  __dirname,
  "../../pem/free.csdl.client.certificate.crt"
);
const keyPath = path.resolve(
  __dirname,
  "../../pem/free.csdl.client.certificate.key"
);
const pfxPath = path.resolve(
  __dirname,
  "../../pem/free.csdl.client.certificate.pfx"
);

const cert = fs.readFileSync(certPath);
const key = fs.readFileSync(keyPath);
const pfx = fs.readFileSync(pfxPath);

const httpsAgent = new https.Agent({
  cert: cert,
  key: key,
  pfx: pfx,
  rejectUnauthorized: false,
});

module.exports = { httpsAgent, ravenDbUrl, database, pfx };
