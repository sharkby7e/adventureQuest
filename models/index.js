const Adventurer = require("./Adventurer");
const Class = require("./Class");
const Quest = require("./Quest");
const Questmaster = require("./Questmaster");

Adventurer.hasMany(Quest, {
    foreignKey: "questId",
    onDelete: "CASCADE",
});

Adventurer.hasOne(Class, {
    foreignKey: "classId",
    onDelete: "CASCADE",
});

Adventurer.belongsTo(Class, {
    foreignKey: "classId",
    onDelete: "CASCADE",
});

Quest.hasMany(Adventurer, {
    foreignKey: "adventurerId",
    onDelete: "CASCADE",
});

Quest.belongsTo(Questmaster, {
    foreignKey: "questId",
    onDelete: "CASCADE",
});


module.exports = { Adventurer, Class, Quest, Questmaster };