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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Save the princess from the...",
    },
    difficulty: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    monsterInt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 12,
    },
    monsterHitPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },
    monsterDex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 12,
    },
    monsterStr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 12,
    },
    questMasterId: {
      type: DataTypes.INTEGER,
      references: {
        model: "questmaster",
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
