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

    const adventurerData = await Adventurer.findAll({
      include: [{ model: Class }],
    });

    //serializedata
    const quests = questData.map((quest) => quest.get({ plain: true }));
    const adventurers = adventurerData.map((adventure) =>
      adventure.get({ plain: true })
    );

    //testing assumptions
    console.log(quests);
    console.log(adventurers);
    res.render("questBoard", { quests, adventurers });
  } catch (err) {
    console.log("Error fetching data");
  }
});

router.get("/create", auth, async (req, res) => {
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
