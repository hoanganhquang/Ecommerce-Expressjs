const { Sequelize, DataTypes } = require("sequelize");

const Order = require("./orderModel");
const Product = require("./productModel");

const sequelize = require("./DBConfig");

const Orderdetail = sequelize.define(
  "orderdetail",
  {
    // orderNumber: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   references: {
    //     model: "order",
    //     key: "orderNumber",
    //   },
    // },
    // productId: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   references: {
    //     model: "product",
    //     key: "id",
    //   },
    // },
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Order.belongsToMany(Product, {
  through: Orderdetail,
  foreignKey: "orderNumber",
});
Product.belongsToMany(Order, {
  through: Orderdetail,
  foreignKey: "productId",
});

module.exports = Orderdetail;
