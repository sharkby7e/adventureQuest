const { AdventureQuest } = require("../models");

const aqData = [
  {
    questId: 1,
    adventurerId: 1,
    win: false,
    battle: "Gahhhhh! Lucky blow... That won't happen again! - You've taken damage!|Gahhhhh! Lucky blow... That won't happen again! - You've taken damage!|Gahhhhh! Lucky blow... That won't happen again! - You've taken damage!",
    injuries: "2|1|2",
    damage: "3|3|4",
    monsterHP: "300|299|291",
    adventurerHP: "50|20|0",
  },
];

const aqs = () => AdventureQuest.bulkCreate(aqData);
module.exports = aqs;
