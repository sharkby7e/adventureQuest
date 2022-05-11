const res = require("express/lib/response");
const { Class, Questmaster, Quest, Adventurer } = require("../models");
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
  // req.session.save(()=> {
  // res.session.user_id = quest
  // })
  res.render("login");
});

router.get("/signUp", async (req, res) => {
  res.render("signUp");
});

//don't forget to add auth back in
router.get("/questBoard", async (req, res) => {
  try {
    const questData = await Quest.findAll({
      include: [
        {
          model: Questmaster,
          attributes: ["questMasterName"],
        },
      ],
    });
    const quests = questData.map((quest) => quest.get({ plain: true }));
    const adventurerData = await Adventurer.findAll({
      include: [{ model: Class }],
    });
    const adventurers = adventurerData.map((adventure) =>
      adventure.get({ plain: true })
    );
    // console.log(adventurerData);
    // res.render("questBoard", [adventurers, quests]); // res.render("questBoard", questsArray)
    console.log(quests);
    console.log(adventurers);
    res.render("questBoard", { quests, adventurers });
  } catch (err) {
    console.log("Error fetching data");
  }
});

// request db, to get all quests

// parse the data that you want
// add to an object, and then pass it to the handlebars template

//in questboard.hbs {{#each quests}}{{> quest display partial}}{{/each}}

router.get("/create", async (req, res) => {
  res.render("createQuest");
});

router.get("/qw", async (req, res) => {
  res.render("questBoard");
});

router.get("/w", async (req, res) => {
  res.render("gamePlay");
});


router.get("/h", async (req, res) => {
  res.render("results");
});
module.exports = router;
