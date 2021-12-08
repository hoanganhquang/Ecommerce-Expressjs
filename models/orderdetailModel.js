const { Sequelize, DataTypes } = require("sequelize");

const Order = require("./orderModel");
const Product = require("./productModel");

const sequelize = require("./DBConfig");

const Orderdetail = sequelize.define(
  "orderdetail",
  {
    orderNumber: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "order",
        key: "orderNumber",
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "product",
        key: "id",
      },
    },
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Order.belongsToMany(Product, { through: Orderdetail });
Product.belongsToMany(Order, { through: Orderdetail });

module.exports = Orderdetail;
