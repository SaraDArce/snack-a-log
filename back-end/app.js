// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const snackController = require("./controllers/snackController.js");
const app = express();

// CONFIGURATION
// require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snackController);

// 404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
