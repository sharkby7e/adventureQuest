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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
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
