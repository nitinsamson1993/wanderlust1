const express = require("express");
const router = express.Router();


//Index - users
router.get("/", (req, res) =>{
    res.send("GET for users");
})

//show route
router.get("/:id", (req, res) =>{
    res.send("GET for show users id");
})


//POST route
router.post("/", (req, res) =>{
    res.send("POST for show users");
})

//delete route
router.delete("/:id", (req, res) =>{
    res.send("DELETE for show users id");
})

module.exports = router;