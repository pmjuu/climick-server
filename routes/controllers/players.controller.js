const Player = require("../../models/Player");

exports.getPlayer = async function (req, res, next) {
  try {
    const players = await Player.find().lean();
    res.json({ status: 200, message: "success", players });
  } catch (err) {
    next(err);
  }
};

exports.addPlayer = async function (req, res, next) {
  const playerInfo = req.body;

  try {
    await new Player(playerInfo).save();
    res.json({ result: "ok" });
  } catch (err) {
    next(err);
  }
};
