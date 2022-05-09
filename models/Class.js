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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    Dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    Intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    class: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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