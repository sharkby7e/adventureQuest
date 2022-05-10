const adv = require("./adv-seeds");
const cls = require("./clas-seeds");
// const gld = require('./guild-seeds')
const qm = require("./qm-seeds");
const qs = require("./quest-seeds");
const user = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- db SYNCED -----\n");

  await cls();
  console.log("\n----- classes SEEDED -----\n");

  await adv();
  console.log("\n----- adventurers SEEDED -----\n");

  await qm();
  console.log("\n----- questmasters SEEDED -----\n");

  await qs();
  console.log("\n----- quests SEEDED -----\n");

  await user();
  console.log("\n----- users SEEDED -----\n");

  process.exit(0);
};

seedAll();
