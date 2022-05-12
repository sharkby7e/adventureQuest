const Adventurer = require("./Adventurer");
const Class = require("./Class");
const Quest = require("./Quest");
const Questmaster = require("./QuestMaster");
const Guild = require("./Guild");

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
  through: Guild,
  foreignKey: "adventurerId",
});

Quest.belongsToMany(Adventurer, {
  through: Guild,
  foreignKey: "questId",
});

Questmaster.hasMany(Adventurer, {
  foreignKey: "questMasterId",
});

Adventurer.belongsTo(Questmaster, {
  foreignKey: "questMasterId",
});

module.exports = { Guild, Adventurer, Class, Quest, Questmaster };
