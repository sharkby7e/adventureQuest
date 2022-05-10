const res = require("express/lib/response");
const auth = require("../utils/auth");

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
  //
  res.render("signUp");
});

router.get("/questBoard", auth, async (req, res) => {
  // request db, to get all quests
  // parse the data that you want
  // add to an object, and then pass it to the handlebars template
  res.render("questBoard"); // res.render("questBoard", questsArray)

  //in questboard.hbs {{#each quests}}{{> quest display partial}}{{/each}}
});

router.get("/create", async (req, res) => {
  res.render("createQuest");
});

router.get("/qw", async (req, res) => {
  res.render("questBoard");
});
module.exports = router;
