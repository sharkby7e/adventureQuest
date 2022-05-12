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


router.put('/:id', async (req, res) => {
  try {
  console.log('AQ put router');
  console.log(req.body);
  const updated = await AdventureQuest.update(
    {
      ...req.body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
      console.log(updatedAQ);
      console.log(updated);
      res.json({aq: updatedAQ});

  } catch (err) {res.json(err)}
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