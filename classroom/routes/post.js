const express = require("express");
const router = express.Router();



//posts

//Index 
router.get("/", (req, res) =>{
    res.send("GET for posts");
})

//show 
router.get("/:id", (req, res) =>{
    res.send("GET for show posts id");
})


//POST 
router.post("/", (req, res) =>{
    res.send("POST for show posts");
})


//delete 
router.delete("/:id", (req, res) =>{
    res.send("DELETE for show posts id");
})

module.exports = router;