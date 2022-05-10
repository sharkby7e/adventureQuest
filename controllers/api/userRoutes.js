const router = require("express").Router();
const { Adventurer, Quest } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.session(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res
        .status(200)
        .json({ user: user, message: `New user ${req.body.name} created` });
    });
    res.render("character");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
