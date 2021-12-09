const { Sequelize, DataTypes } = require("sequelize");

const User = require("./userModel");

const sequelize = require("./DBConfig");

const Payment = sequelize.define(
  "payment",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Payment);
Payment.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = Payment;
