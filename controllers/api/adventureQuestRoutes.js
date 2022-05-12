const router = require("express").Router();
const { AdventureQuest } = require("../../models");
const auth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const aq = await AdventureQuest.create({
      ...req.body,
    });
    console.log(aq.get({ plain }));
    res.status(200).json({ message: `New AdventureQuest created!` });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await AdventureQuest.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id },
      }
    );
    console.log(updated);
    res.status(200).json({ aq: updated, message: "aq updated" });
    // res.json(updated);
    // console.log(updated);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const getAdventurerQuests = await AdventureQuest.findAll({});
    res.json(getAdventurerQuests);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getAdventurerQuest = await AdventureQuest.findByPk(req.params.id, {});
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
