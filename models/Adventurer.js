const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
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
    title: {
      type: DataTypes.INTEGER,
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
    classId: {
      type: DataTypes.INTEGER,
      references: {
        model: "class",
        key: "id",
      },
    },
    questId: {
      type: DataTypes.INTEGER,
      references: {
        model: "quest",
        key: "id",
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
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