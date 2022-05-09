const router = require("express").Router();
const adventurerRoutes = require("./adventurerRoutes");
const questMasterRoutes = require("./adventurerRoutes");
const questRoutes = require("./questRoutes");

router.use("/adventurer", adventurerRoutes);
router.use("/quests", questRoutes);
router.use("/questmasters", questMasterRoutes);

module.exports = router;
