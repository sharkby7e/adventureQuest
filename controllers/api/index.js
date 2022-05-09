const router = require("express").Router();
const adventurerRoutes = require("./adventurerRoutes");
const questMasterRoutes = require("./questMasterRoutes");
const questRoutes = require("./questRoutes");

router.use("/adventurer", adventurerRoutes);
router.use("/questmasters", questMasterRoutes);
router.use("/quests", questRoutes);

module.exports = router;
