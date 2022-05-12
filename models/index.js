const Adventurer = require("./Adventurer");
const Class = require("./Class");
const Quest = require("./Quest");
const Questmaster = require("./QuestMaster");
const AdventureQuest = require("./AdventureQuest");

Quest.belongsTo(Questmaster, {
  foreignKey: "questMasterId",
  onDelete: "CASCADE",
});

Questmaster.hasMany(Quest, {
  foreignKey: "questMasterId",
});

Adventurer.belongsTo(Class, {
  foreignKey: "classId",
});

Class.hasMany(Adventurer, {
  foreignKey: "classId",
});

Adventurer.belongsToMany(Quest, {
  through: {
    model: AdventureQuest,
    unique: false,
  },
  // foreignKey: "adventurerId",
  as: "theAdventure",
});

Quest.belongsToMany(Adventurer, {
  through: {
    model: AdventureQuest,
    unique: false,
  },
  as: "theQuest",
  // foreignKey: "questId",
});

Questmaster.hasMany(Adventurer, {
  foreignKey: "questMasterId",
});

Adventurer.belongsTo(Questmaster, {
  foreignKey: "questMasterId",
});

module.exports = { AdventureQuest, Adventurer, Class, Quest, Questmaster };
