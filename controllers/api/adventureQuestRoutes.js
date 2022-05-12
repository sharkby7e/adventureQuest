const router = require("express").Router();
const { AdventureQuest } = require("../../models");
const auth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const aq = await AdventureQuest.create({
      ...req.body,
      questMasterId: req.session.questMasterId,
    });
    res.status(200).json({
      user: user,
      message: `New created!`,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  AdventureQuest.update(
    {
      win: req.body.win,
      battle: req.body.battle,
      injuries: req.body.injuries,
      damage: req.body.damage,
      monsterHP: req.body.monsterHP,
      adventurerHP: req.body.adventurerHP,
    },
    {
      where: {
        isbn: req.params.id,
      },
    }
  )
    .then((updated) => {
      res.json(updated);
    })
    .catch((err) => res.json(err));
});



router.get("/", async (req, res) => {
  try {
    const getAdventurerQuests = await AdventureQuest.findAll({
    });
    res.json(getAdventurerQuests);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getAdventurerQuest = await AdventureQuest.findByPk(req.params.id, {
    });
    if (!getAdventurerQuest) {
      res.status(404).json({ message: "Not found with that id!" });
      return;
    }
    res.status(200).json(getAdventurerQuest);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;