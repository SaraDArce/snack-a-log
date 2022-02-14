const express = require("express");
const snacks = express.Router();

const { getAllSnacks, getOneSnack } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
    try{
        const allSnacks = await getAllSnacks();
        if(allSnacks[0]){
            res.status(200).json({success: true, payload: allSnacks});
        } else{
            res.status(404).json({error: "No snacks were returned from db"});
        }
    } catch(err){
       return err;
    }
});

snacks.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const snack = await getOneSnack(id);
        if(snack.id){
            res.status(200).json({success: true, payload: snack});
        } else{
            res.status(404).json({error: "Snack not returned from db"});
        }
    } catch(err){
        return err;
    }
});


module.exports = snacks;