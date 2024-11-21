const express = require("express");
const {
  fetchPatientCount,
  fetchDocument,
  fetchAdmissionCount,
  fetchDischargeCount,
} = require("./data.controller");

const router = express.Router();

router.get("/patient-count", fetchPatientCount);
router.get("/admission-count", fetchAdmissionCount);
router.get("/discharge-count", fetchDischargeCount);
router.get("/document", fetchDocument);

module.exports = router;
