const { DataTypes } = require("sequelize");

const sequelize = require("./DBConfig");
const Order = require("./orderModel");

const Voucher = sequelize.define(
  "vouchers",
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
      allowNull: false,
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date(),
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "vouchers",
  }
);

Voucher.hasMany(Order);
Order.belongsTo(Voucher, {
  foreignKey: "voucherCode",
});

module.exports = Voucher;
