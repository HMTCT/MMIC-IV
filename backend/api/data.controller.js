const {
  getPatientCount,
  getDocumentByQuery,
  getAdmissionCount,
  getDischargeCount,
} = require("./data.service");

exports.fetchPatientCount = async (req, res) => {
  try {
    const { thisMonth, lastMonth } = req.query;

    if (!thisMonth || !lastMonth) {
      return res
        .status(400)
        .json({ error: "Missing thisMonth or lastMonth query parameter" });
    }

    const count = await getPatientCount(thisMonth, lastMonth);
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.fetchAdmissionCount = async (req, res) => {
  try {
    const { thisMonth, lastMonth } = req.query;

    if (!thisMonth || !lastMonth) {
      return res
        .status(400)
        .json({ error: "Missing thisMonth or lastMonth query parameter" });
    }

    const count = await getAdmissionCount(thisMonth, lastMonth);
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.fetchDischargeCount = async (req, res) => {
  try {
    const { thisMonth, lastMonth } = req.query;

    if (!thisMonth || !lastMonth) {
      return res
        .status(400)
        .json({ error: "Missing thisMonth or lastMonth query parameter" });
    }

    const count = await getDischargeCount(thisMonth, lastMonth);
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.fetchDocument = async (req, res) => {
  try {
    const response = await getDocumentByQuery(req);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: error.message });
  }
};
