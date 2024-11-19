const fs = require("fs");
const { Kafka } = require("@confluentinc/kafka-javascript").KafkaJS;
const axios = require('axios');
const https = require('https');

const httpsAgent = new https.Agent({
  cert: fs.readFileSync('pem/free.csdl.client.certificate.crt'),
  key: fs.readFileSync('pem/free.csdl.client.certificate.key'),
  pfx: fs.readFileSync('pem/free.csdl.client.certificate.pfx'),
});

function readConfig(fileName) {
  const data = fs.readFileSync(fileName, "utf8").toString().split("\n");
  return data.reduce((config, line) => {
    const [key, value] = line.split("=");
    if (key && value) {
      config[key] = value;
    }
    return config;
  }, {});
}

async function main() {
  const config = readConfig("client.properties");
  const topic = "mimic_iv";

  const disconnect = () => {
    consumer.commitOffsets().finally(() => {
      consumer.disconnect();
    });
  };
  process.on("SIGTERM", disconnect);
  process.on("SIGINT", disconnect);

  // set the consumer's group ID, offset and initialize it
  config["group.id"] = "log-server";
  config["auto.offset.reset"] = "earliest";
  const consumer = new Kafka().consumer(config);

  // connect the consumer to the broker
  await consumer.connect();

  // subscribe to the topic
  await consumer.subscribe({ topics: [topic] });

  // consume messages from the topic
  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const key = message.key.toString()
      const value = JSON.parse(message.value.toString())

      await axios.put(`https://a.free.csdl.ravendb.cloud/databases/MMIC-IV/docs?id=${Date.now()}`, value, {
        httpsAgent,
      })

      console.log(
        `Consumed message from topic ${topic}, partition ${partition}: key = ${message.key.toString()}, value = ${message.value.toString()}\n`
      );
    },
  });
}

main();
