const { DataTypes } = require("sequelize");

const Product = require("./productModel");
const User = require("../models/userModel");

const sequelize = require("./DBConfig");

const Cart = sequelize.define(
  "cart",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "user",
        key: "id",
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
    quantityProduct: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

User.belongsToMany(Product, { through: Cart });
Product.belongsToMany(User, { through: Cart });

module.exports = Cart;
