const express = require("express");
const snacks = express.Router();

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
      res.status(404).json({ success: false, payload: "No snacks were returned from db" });
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
      res.status(404).json({ success: false, payload: "Snack not returned from db" });
    }
  } catch (err) {
    return err;
  }
});

snacks.post("/", async (req, res) => {
  const { body } = req;
  try {
    const createdSnack = await createSnack(body);
    if (createdSnack.id) {
      res.status(200).json(createdSnack);
    } else {
      res.status(500).json({ success: false, payload: "Snack creation error" });
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
    res.status(404).json({ success: false, payload: "Snack not found" });
  }
});

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedSnack = await updateSnack(id, body);
  console.log(updatedSnack);
  
  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res.status(404).json({ success: false, payload: "Snack not found" });
  }
});

module.exports = snacks;
