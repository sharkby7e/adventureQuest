const router = require("express").Router();
const adventureQuestRoutes = require("./adventureQuestRoutes");
const adventurerRoutes = require("./adventurerRoutes");
const questMasterRoutes = require("./questMasterRoutes");
const questRoutes = require("./questRoutes");

router.use("/adventurequest", adventureQuestRoutes);
router.use("/adventurer", adventurerRoutes);
router.use("/questmasters", questMasterRoutes);
router.use("/quests", questRoutes);

module.exports = router;
