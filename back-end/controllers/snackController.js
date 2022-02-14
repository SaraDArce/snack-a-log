const express = require("express");
const snacks = express.Router();
const {
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");

snacks.post("/", async (req, res) => {
  const { body } = req;
  try {
    const createdSnack = await createSnack(body);
    if (createdSnack.id) {
      res.status(200).json(createdSnack);
    } else {
      res.status(500).json({ error: "Snack creation error" });
    }
  } catch (err) {
    console.log(err);
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json(deletedSnack);
  } else {
    res.status(404).json({ error: "Snack not found" });
  }
});

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedSnack = await updateSnack(id, body);
  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res.status(404).json({ error: "Snack not found" });
  }
});

module.exports = snacks;
