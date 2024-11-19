const fs = require("fs");
const { parse } = require("csv-parse");
const { Kafka } = require("@confluentinc/kafka-javascript").KafkaJS;

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
    const producer = new Kafka().producer(config);
    await producer.connect();

    const filePath = "./mimic-iv-3.1/icu/icustays.csv"
    const numLine = 1
    const key = "icustays"

    let headers = null
    let index = 0
    let count = 0

    fs.createReadStream(filePath)
        .pipe(parse({ delimiter: ",", from_line: 1, to_line: numLine + 1 }))
        .on("data", (row) => {
            if (headers) {
                index += 1
                setTimeout(async () => {
                    const value = JSON.stringify(Object.fromEntries(headers.map((key, index) => [key, row[index]])))
                    const produceRecord = await producer.send({
                        topic,
                        messages: [{ key, value }],
                    });
                    console.log(
                        `\n\n Produced message to topic ${topic}: key = ${key}, value = ${value}, ${JSON.stringify(
                            produceRecord,
                            null,
                            2
                        )} \n\n`
                    )
                    if (count === numLine - 1) {
                        await producer.disconnect();
                    } else {
                        count += 1
                    }
                }, index * 5000)
            } else {
                headers = row
            }
        })
        .on("end", () => {
            console.log("finish reading.")
        })
}

main();