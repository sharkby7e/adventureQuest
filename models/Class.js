const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
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
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "class",
  }
);

module.exports = Class;
