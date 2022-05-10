const { Quest } = require("../models");

const qData = [
  {
    monster: "Ancient Brass Dragon",
    questMasterId: 1,
  },
  {
    monster: "Medusa",
    questMasterId: 1,
  },
  {
    monster: "Death Dog",
    questMasterId: 1,
  },
  {
    monster: "Bearded Devil",
    questMasterId: 1,
  },
];

const seedQ = () => Quest.bulkCreate(qData);
module.exports = seedQ;
