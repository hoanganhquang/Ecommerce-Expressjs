const { DataTypes } = require("sequelize");

const User = require("./userModel");
const Voucher = require("./voucherModel");
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
      allowNull: true,
      defaultValue: "Chưa giao",
    },
    comments: {
      type: DataTypes.TEXT("medium"),
      allowNull: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    total: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Order);
Order.belongsTo(User, {
  foreignKey: "userId",
});

Voucher.hasMany(Order);
Order.belongsTo(Voucher, {
  foreignKey: "voucherCode",
});

module.exports = Order;
