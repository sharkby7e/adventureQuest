const res = require("express/lib/response");

const router = require("express").Router();
// const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("landing");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signUp", async (req, res) => {
  res.render("signUp");
});

router.get("/quests", async (req, res) => {
  res.render("questBoard");
});

router.get("/post", async (req, res) => {
  res.render("postQuest");
});


module.exports = router;
