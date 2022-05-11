const router = require("express").Router();
const { Quest } = require("../../models");


router.get("/", async (req, res) => {
  try {
    const getQuests = await Quest.findAll({

    });
    res.json(getQuests);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   try {
//     const getQuest = await Quest.findByPk(req.params.id, {

//     });
//     if (!getQuest) {
//       res.status(404).json({ message: "No adventurer found with that id!" });
//       return;
//     }
//     res.status(200).json(getQuest);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post("/random", (req, res) => {
//   res.json(req.body);
// })

// router.post("/", async (req, res) => {
//   try {
//     console.log(req.body);
// res.json('Hellolalalala');
//     // const {
//     //   monster,
//     //   description,
//     //   difficulty,
//     //   monsterInt,
//     //   monsterHitPoints,
//     //   monsterDex,
//     //   monsterStr } = req.body;

//     //   console.log(monster);
//       // const questMasterId = req.session.questMasterId;
//       // const questMasterId = 1;

//     // if (req.body) {
//     //   const newQuest = {
//     //     monster,
//     //     description,
//     //     difficulty,
//     //     monsterInt,
//     //     monsterHitPoints,
//     //     monsterDex,
//     //     monsterStr,
//     //     questMasterId
//     //   }
//     //   // const quest = await Quest.create(newQuest);
//     // //   res.status(200)
//     // //     .json({ newQuest, message: `New quest created!` });
//     // }
//     } catch (err) {
//   res.status(400).json(err);
// }
//   });







// router.post("/", async (req, res) => {
//   try {
//     const user = await Quest.create(req.body);
//     req.session.save(() => {
//       req.session.user_id = user.id;
//       req.session.logged_in = true;
//       res
//         .status(200)
//         .json({ user: user, message: `New user ${req.body.name} created!` });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
//   res.status(200);
// });

router.post("/random", async (req, res) => {
  // res.json("hello");
  res.json(req.body);
});

module.exports = router;
