// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const snackController = require("./controllers/snackController.js");

// CONFIGURATION
require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snackController);


// EXPORT
module.exports = app;
