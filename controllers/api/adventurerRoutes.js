const router = require("express").Router();
const { Adventurer } = require("../../models");
//
router.post("/", async (req, res) => {
  try {
    const user = await Adventurer.create(req.body);
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res
        .status(200)
        .json({ user: user, message: `New user ${req.body.name} created!` });
    });
  } catch (err) {
    res.status(400).json(err);
  }
  res.status(200);
});

//updates adventurer experience)
// router.put();

module.exports = router;
