const Player = require("../../models/Player");

exports.getPlayer = async function (req, res, next) {
  try {
    const players = await Player.find().lean();
    res.json({ message: "success", players });
  } catch (err) {
    next(err);
  }
};

exports.addPlayer = async function (req, res, next) {
  const playerInfo = req.body;

  try {
    await new Player(playerInfo).save();
    res.json({ message: "success" });
  } catch (err) {
    next(err);
  }
};
