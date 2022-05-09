const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quest extends Model {}

Quest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    monster: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 1,
    },
    adventurerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "adventurer",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "quest",
  }
);

module.exports = Quest;