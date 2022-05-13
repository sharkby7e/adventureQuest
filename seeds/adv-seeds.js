const { Adventurer } = require("../models");

const advData = [
  {
    title: "King",
    name: "Fluffy",
    classId: 1,
    strength: 40,
    intelligence: 20,
    dexterity: 30,
    questMasterId: 1,
  },
  {
    title: "Sultan",
    name: "Sriracha",
    classId: 2,
    strength: 37,
    intelligence: 15,
    dexterity: 38,
    questMasterId: 1,
  },
  {
    title: "Sheik",
    name: "Harlem",
    classId: 2,
    classId: 3,
    strength: 25,
    intelligence: 55,
    dexterity: 10,
    questMasterId: 1,
  },
  {
    title: "King",
    name: "Mpopno'Thrap",
    classId: 2,
    strength: 30,
    intelligence: 30,
    dexterity: 30,
    questMasterId: 1,
  },
];

const seedAdv = () => Adventurer.bulkCreate(advData);
module.exports = seedAdv;
