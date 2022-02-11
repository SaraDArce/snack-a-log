// DEPENDENCIES

const express = require("express");
const app = express();
const cors = require("cors");

// CONFIGURATION
require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

// EXPORT
module.exports = app;
