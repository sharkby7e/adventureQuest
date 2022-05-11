const router = require("express").Router();
const { Questmaster, Adventurer, Quest } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const qm = await Questmaster.create(req.body);
    req.session.save(() => {
      req.session.questMasterId = qm.id;
      req.session.logged_in = true;
      res.status(200).json({
        qm: qm,
        message: `New Questmaster ${req.body.name} created!`,
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
  res.status(200);
});

router.post("/login", async (req, res) => {
  try {
    const qm = await Questmaster.findOne({
      where: { username: req.body.username },
    });
    if (!qm) {
      res.status(400).json({ message: "Incorrect email or Password!" });
      return;
    }
    const valid = await qm.checkPassword(req.body.password);
    if (!valid) {
      res.status(400).json({ message: "Incorrect email or Password!" });
      return;
    }
    req.session.save(() => {
      req.session.questMasterId = qm.id;
      req.session.logged_in = true;
      res.json({ qm: qm, message: `Thanks for logging in, ${qm.name}` });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
