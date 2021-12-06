const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize();

const Payment = sequelize.define("payment", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Date.now(),
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Payment;
