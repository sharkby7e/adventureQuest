const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Questmaster extends Model {}

Questmaster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    questMasterName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (username) => {
        username.password = await bcrypt.hash(username.password, 10);
        return username;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "questmaster",
  }
);

module.exports = Questmaster;
