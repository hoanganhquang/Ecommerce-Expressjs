const { Sequelize, DataTypes } = require("sequelize");

const Voucher = require("./voucherModel");
const User = require("./userModel");

const sequelize = require("./DBConfig");

const Order = sequelize.define(
  "order",
  {
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
  },
  {
    timestamps: false,
  }
);

Voucher.hasMany(Order);
Order.belongsTo(Voucher, {
  foreignKey: "voucherCode",
});

User.hasMany(Order);
Order.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = Order;
