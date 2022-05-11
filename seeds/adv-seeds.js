const { Adventurer } = require("../models");

const advData = [
  {
    title: "King",
    name: "Fluffy",
    classId: 1,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
  {
    title: "Sultan",
    name: "Sriracha",
    classId: 2,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
  {
    title: "Sheik",
    name: "Harlem",
    classId: 2,
    classId: 3,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
  {
    title: "King",
    name: "Mpopno'Thrap",
    classId: 2,
    classId: 2,
    strength: 15,
    intelligence: 15,
    dexterity: 15,
  },
];

const seedAdv = () => Adventurer.bulkCreate(advData);
module.exports = seedAdv;
