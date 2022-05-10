const { User } = require("../models");

const userData = [
  {
    username: "sid",
    password: "sidsidsid",
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
