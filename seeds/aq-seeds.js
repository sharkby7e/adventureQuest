const { AdventureQuest } = require("../models");

const aqData = [
  {
    questId: 1,
    adventurerId: 1,
  },
];

const aqs = () => AdventureQuest.bulkCreate(aqData);
module.exports = aqs;
