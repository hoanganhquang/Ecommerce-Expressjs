const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize();

const Order = sequelize.define("order", {
  orderNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.TEXT("medium"),
    allowNull: true,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Date.now(),
  },
});

module.exports = Order;
