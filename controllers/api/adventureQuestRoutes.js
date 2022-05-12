const router = require("express").Router();
const { AdventureQuest } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const aq = await Adventurer.create({
      ...req.body,
      questMasterId: req.session.questMasterId,
    });
    res.status(200).json({
      user: user,
      message: `New Adventurer ${req.body.name} created!`,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
