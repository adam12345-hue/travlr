const express = require('express');
const router = express.Router();

console.log("TRAVEL ROUTER LOADED");

router.get('/', function (req, res) {
    console.log("TRAVEL GET HIT");
    res.send("Travel route works!");
});

module.exports = router;