const { Quest } = require("../models");

const qData = [
  {
    monster: "Ancient Brass Dragon",
    questMasterId: 1,
  },
  {
    monster: "Medusa",
    questMasterId: 2,
  },
  {
    monster: "Death Dog",
    questMasterId: 4,
  },
  {
    monster: "Bearded Devil",
    questMasterId: 3,
  },
];

const seedQ = () => Quest.bulkCreate(qData);
module.exports = seedQ;
