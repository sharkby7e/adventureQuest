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
    win: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    battle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    injuries: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    damage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monsterHP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adventurerHP: {
      type: DataTypes.STRING,
      allowNull: false,
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
