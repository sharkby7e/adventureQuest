const router = require("express").Router();
const adventurerRoutes = require("./adventurerRoutes");
const questMasterRoutes = require("./questMasterRoutes");
const questRoutes = require("./questRoutes");
const userRoutes = require("./userRoutes");

router.use("/adventurer", adventurerRoutes);
router.use("/questmasters", questMasterRoutes);
router.use("/quests", questRoutes);
router.use("/users", userRoutes);

module.exports = router;
