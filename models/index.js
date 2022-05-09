const Adventurer = require("./Adventurer");
const Class = require("./Class");
const Quest = require("./Quest");

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




module.exports = { Adventurer, Class, Quest };