const { Questmaster } = require("../models");

const qmDat = [
  {
    name: "Wizzy Wazooo",
    userId: 1,
  },
  {
    name: "Questy McMaster",
    userId: 1,
  },
  {
    name: "So Journey",
    userId: 1,
  },
  {
    name: "Fetch Mea Bunny",
    userId: 1,
  },
];

const seedQm = () => Questmaster.bulkCreate(qmDat);

module.exports = seedQm;
