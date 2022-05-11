const router = require("express").Router();
const { Adventurer, Class } = require("../../models");
//
router.post("/", async (req, res) => {
  try {
    const user = await Adventurer.create({
      ...req.body,
      questMasterId: req.session.questMasterId,
    });
    res
      .status(200)
      .json({
        user: user,
        message: `New Adventurer ${req.body.name} created!`,
      });
  } catch (err) {
    res.status(400).json(err);
  }
});

//updates adventurer experience)
// router.put();

router.get("/", async (req, res) => {
  try {
    const getAdventurers = await Adventurer.findAll({
      include: [{ model: Class }],
    });
    res.json(getAdventurers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getAdventurer = await Adventurer.findByPk(req.params.id, {
      include: [{ model: Class }],
    });
    if (!getAdventurer) {
      res.status(404).json({ message: "No adventurer found with that id!" });
      return;
    }
    res.status(200).json(getAdventurer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
