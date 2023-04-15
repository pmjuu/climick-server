const express = require("express");
const { getPlayer, addPlayer } = require("./controllers/players.controller");

const router = express.Router();

router.get("/", getPlayer);
router.post("/", addPlayer);

module.exports = router;
