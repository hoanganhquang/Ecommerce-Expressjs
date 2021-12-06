const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("./DBConfig");

const Category = sequelize.define(
  "category",
  {
    textDescription: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
  },
  {
    tableName: "category",
    timestamps: false,
  }
);

module.exports = Category;
