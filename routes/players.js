const express = require("express");
const { addPlayer } = require("./controllers/players.controller");

const router = express.Router();

router.post("/", addPlayer);

module.exports = router;
