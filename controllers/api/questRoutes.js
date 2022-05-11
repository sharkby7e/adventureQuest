const router = require("express").Router();
const { Adventurer, Quest } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const allQuests = await Quest.findAll({});
    // where: { questMasterId: req.session.questMasterId },
    res.status(200).json({ allQuests });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const questMasterId = req.session.questMasterId;
    const quest = await Quest.create({
      ...req.body,
      questMasterId,
    });
    res.status(200).json({ newQuest: quest, message: `New quest created!` });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
