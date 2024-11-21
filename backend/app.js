const express = require("express");
const cors = require("cors");
const dataRoutes = require("./api/data.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/api/data", dataRoutes);

module.exports = app;
