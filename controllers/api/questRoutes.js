const router = require("express").Router();
const { Quest } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const allQuests = await Quest.findAll({});
    // where: { questMasterId: req.session.questMasterId },
    res.status(200).json({ allQuests });
  } catch (err) {
    res.status(400).json(err);
  }
});



router.get("/:id", async (req, res) => {
  try {
    const getQuest = await Quest.findByPk(req.params.id, {
     
    });
    if (!getQuest) {
      res.status(404).json({ message: "No quest found with that id!" });
      return;
    }
    res.status(200).json(getQuest);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
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
