const Adventurer = require("./Adventurer");
const Class = require("./Class");
const Quest = require("./Quest");
const Questmaster = require("./Questmaster");
const Guild = require("./Guild");
const User = require("./User");


Quest.belongsTo(Questmaster, {
  foreignKey: "questmasterId",
  onDelete: "CASCADE",
});

Questmaster.hasMany(Quest, {
  foreignKey: "questmasterId",
});

Class.hasMany(Adventurer, {
  foreignKey: "classId",
});

Adventurer.belongsTo(Class, {
  foreignKey: "classId",
});


Adventurer.belongsToMany(Quest, {
  through: Guild,
  foreignKey: 'adventurerId',
});


Quest.belongsToMany(Adventurer, {
  through: Guild,
  foreignKey: 'questId',
});

module.exports = { Guild, Adventurer, Class, Quest, Questmaster, User };
