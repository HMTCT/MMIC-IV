const axios = require("axios");
const { store } = require("./config/DocumentStore");
const { httpsAgent, ravenDbUrl, database } = require("./config/httpsAgent");

async function getPatientCount(thisMonth, lastMonth) {
  try {
    console.log("Running query to count records...");

    const session = store.openSession();

    const thisMonthCount = await session
      .query({ collection: "Icustays" })
      .whereGreaterThan("outtime", thisMonth)
      .andAlso()
      .whereLessThan("intime", thisMonth)
      .count();

    const lastMonthCount = await session
      .query({ collection: "Icustays" })
      .whereGreaterThan("outtime", lastMonth)
      .andAlso()
      .whereLessThan("intime", lastMonth)
      .count();

    return {
      thisMonthCount,
      lastMonthCount,
    };
  } catch (error) {
    console.error("Error in getPatientCount:", error.message);
    throw error;
  }
}

async function getAdmissionCount(thisMonth, lastMonth) {
  try {
    console.log("Running query to count records...");

    const session = store.openSession();

    const thisMonthStart = thisMonth.slice(0, 7) + "-01";
    const lastMonthStart = lastMonth.slice(0, 7) + "-01";

    const thisMonthCount = await session
      .query({ collection: "Icustays" })
      .whereBetween("intime", thisMonthStart, thisMonth)
      .count();

    const lastMonthCount = await session
      .query({ collection: "Icustays" })
      .whereBetween("intime", lastMonthStart, lastMonth)
      .count();

    return {
      thisMonthCount,
      lastMonthCount,
    };
  } catch (error) {
    console.error("Error in getAdmissionCount:", error.message);
    throw error;
  }
}

async function getDischargeCount(thisMonth, lastMonth) {
  try {
    console.log("Running query to count records...");

    const session = store.openSession();

    const thisMonthStart = thisMonth.slice(0, 7) + "-01";
    const lastMonthStart = lastMonth.slice(0, 7) + "-01";

    const thisMonthCount = await session
      .query({ collection: "Icustays" })
      .whereBetween("outtime", thisMonthStart, thisMonth)
      .count();

    const lastMonthCount = await session
      .query({ collection: "Icustays" })
      .whereBetween("outtime", lastMonthStart, lastMonth)
      .count();

    return {
      thisMonthCount,
      lastMonthCount,
    };
  } catch (error) {
    console.error("Error in getDischargeCount:", error.message);
    throw error;
  }
}

const getDocumentByQuery = async (query) => {
  const url = `${ravenDbUrl}/databases/${database}/docs?${query}`;

  try {
    const response = await axios.get(url, {
      headers: { "Content-Type": "application/json" },
      httpsAgent: httpsAgent, // Pass the agent with the certificates
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error retrieving document:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = {
  getPatientCount,
  getDocumentByQuery,
  getAdmissionCount,
  getDischargeCount,
};
