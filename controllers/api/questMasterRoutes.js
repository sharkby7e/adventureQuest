const router = require("express").Router();
const { Questmaster, Adventurer, Quest } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const qm = await Questmaster.create(req.body);
    req.session.save(() => {
      req.session.user_id = qm.id;
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
module.exports = router;
