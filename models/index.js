const Adventurer = require("./Adventurer");
const Class = require("./Class");
const Quest = require("./Quest");
const Questmaster = require("./Questmaster");
const Guild = require("./Guild");

Adventurer.hasMany(Quest, {
  foreignKey: "adventurerId",
  onDelete: "CASCADE",
});

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


Adventurer.belongsToMany(Class, {
  through: Guild,
  foreignKey: 'adventurerId',
});


Class.belongsToMany(Adventurer, {
  through: Guild,
  foreignKey: 'classId',
});

module.exports = { Guild, Adventurer, Class, Quest, Questmaster };
