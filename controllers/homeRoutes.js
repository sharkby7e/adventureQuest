const router = require("express").Router();
const { Class, Questmaster, Quest, Adventurer } = require("../models");
const auth = require("../utils/auth");

//landing page
// router.get("/", async (req, res) => {
//   try {
//     res.render("landing", { logged_in: req.session.logged_in });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//renders login page
router.get("/login", async (req, res) => {
  // req.session.save(()=> {
  // res.session.user_id = quest
  // })
  console.log(req.session.logged_in);
  res.render("login");
});

//renders signup page
router.get("/signUp", async (req, res) => {
  res.render("signUp");
});

//shows quest board, redirects to /login if not logged in
router.get("/questBoard", auth, async (req, res) => {
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
    res.render("questBoard", {
      quests,
      adventurers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("Error fetching data");
  }
});

router.get("/create", auth, async (req, res) => {
  res.render("createQuest", { logged_in: req.session.logged_in });
});

router.get("/h", async (req, res) => {
  res.render("results");
});

// router.get("/createadventurer", async (req, res) => {
//   try {
//     const classData = await Class.findall();
//     console.log(classData)
//     res.json(classData)
//     // const classes = classData.map((type) =>
//     //   type.get({ plain: true })
//     // )
//     // res.render("createAdventurer", {classes, logged_in: req.session.logged_in });
//   } catch (err) {
//     console.log("Error fetching data");
//   }
// });

// router.get('/createadventure', async (req, res) => {
//   try {
//     const classData = await Class.findall({
//       include: [{ attributes: [type] }],
//     });
//     res.render(createAdventurer, { logged_in: req.session.logged_in });
//   } catch (err) {
//     console.log('Error fetching data');
//   }
// });

router.get("/createadventurer", async (req, res) => {
  try {
    const classes = (await Class.findAll()).map((type) =>
      type.get({ plain: true })
    );
    res.render("createAdventurer", { classes });
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

// router.get('/p',async(req,res)=>{
//   try{
// res.json('hello')
//   }catch(err){
//     res.status(400).json(err)

//   }
// })

module.exports = router;
