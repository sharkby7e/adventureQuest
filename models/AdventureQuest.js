const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class AdventureQuest extends Model {}

AdventureQuest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    questId: {
      type: DataTypes.INTEGER,
      references: {
        model: "quest",
        key: "id",
      },
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
    modelName: "adventurequest",
  }
);

module.exports = AdventureQuest;
