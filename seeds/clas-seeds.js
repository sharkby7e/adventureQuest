const { Class } = require("../models");

const clasData = [
  {
    type: "Warrior",
    strMultiplier: 1.2,
  },
  {
    type: "Wizard",
    intMultiplier: 1.2,
  },
  {
    type: "Rogue",
    dexMultiplier: 1.2,
  },
];

const seedClas = () => Class.bulkCreate(clasData);

module.exports = seedClas;
