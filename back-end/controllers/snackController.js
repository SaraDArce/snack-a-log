const express = require("express");
const snacks = express.Router();
const capitalization = require("../capitalization");
const confirmHealth = require("../confirmHealth");

const {
  createSnack,
  deleteSnack,
  updateSnack,
  getAllSnacks,
  getOneSnack,
} = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  try {
    const allSnacks = await getAllSnacks();
    if (allSnacks[0]) {
      res.status(200).json({ success: true, payload: allSnacks });
    } else {
      res
        .status(404)
        .json({ success: false, payload: "No snacks were returned from db" });
    }
  } catch (err) {
    return err;
  }
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snack = await getOneSnack(id);
    if (snack.id) {
      res.status(200).json({ success: true, payload: snack });
    } else {
      res.status(404).json({ success: false, payload: "Snack not found" });
    }
  } catch (err) {
    return err;
  }
});

snacks.post("/", async (req, res) => {   // capitalization in 
  const { body } = req;
  try {
    const createdSnack = await createSnack(body);

    if (createdSnack.id) {
      res.status(200).json({ success: true, payload: createdSnack });
    } else {
      res
        .status(422)
        .json({ success: false, payload: "Must include name field" });
    }
  } catch (err) {
    console.log(err);
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json({ success: true, payload: deletedSnack });
  } else {
    res.status(404).json({ success: false, payload: "Snack not deleted" });
  }
});

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedSnack = await updateSnack(id, body);
  console.log(updatedSnack);

  if (updatedSnack.id) {
    res.status(200).json({ success: true, payload: updatedSnack });
  } else {
    res.status(404).json({ success: false, payload: "Snack not updated" });
  }
});

module.exports = snacks;
