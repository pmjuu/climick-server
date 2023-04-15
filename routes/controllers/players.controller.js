const Player = require("../../models/Player");

exports.addPlayer = async function (req, res, next) {
  const playerInfo = req.body;

  try {
    await new Player(playerInfo).save();
    res.json({ result: "ok" });
  } catch (err) {
    next(err);
  }
};
