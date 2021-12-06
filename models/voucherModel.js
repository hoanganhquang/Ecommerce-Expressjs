const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("./DBConfig");

const Voucher = sequelize.define(
  "voucher",
  {
    voucherCode: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date.now(),
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date.now(),
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Voucher;
