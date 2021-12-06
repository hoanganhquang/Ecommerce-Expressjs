const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize();

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  textDescription: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
});

module.exports = Category;
