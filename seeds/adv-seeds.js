const { Adventurer } = require("../models");

const advData = [
  {
    title: "King",
    classId: 1,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
  {
    title: "Sultan",
    classId: 2,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
  {
    title: "Sheik",
    classId: 3,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
  {
    title: "Khalif",
    classId: 2,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
];

const seedAdv = () => Adventurer.bulkCreate(advData);
module.exports = seedAdv;
