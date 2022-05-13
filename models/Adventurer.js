const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Adventurer extends Model {}

Adventurer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "King",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
    },
    statPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
    },
    questMasterId: {
      type: DataTypes.INTEGER,
      references: {
        model: "questmaster",
        key: "id",
      },
    },
    classId: {
      type: DataTypes.INTEGER,
      references: {
        model: "class",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "adventurer",
  }
);

module.exports = Adventurer;
