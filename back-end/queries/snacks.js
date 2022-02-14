const db = require("../db/dbConfig.js");

const createSnack = async (snack) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [snack.name, snack.fiber, snack.protein, snack.added_sugar, is_healthy]
    );
    return newSnack;
  } catch (err) {
    return err;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id = $1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (err) {
    return err;
  }
};

const updateSnack = async (id, snack) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6, WHERE id=$7 RETURNING *",
      [
        snack.name,
        snack.fiber,
        snack.protein,
        snack.added_sugar,
        snack.is_healthy,
        snack.image,
        id,
      ]
    );
    return updatedSnack;
  } catch (err) {
    return err;
  }
};

module.exports = {
  createSnack,
  deleteSnack,
  updateSnack,
};
