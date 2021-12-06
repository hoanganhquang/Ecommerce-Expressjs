const { DataTypes } = require("sequelize");

const Cart = require("./cartModel");
const Product = require("./productModel");

const sequelize = require("./DBConfig");

const productCart = sequelize.define(
  "productcart",
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "product",
        key: "id",
      },
    },
    cartId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "cart",
        key: "id",
      },
    },
    quantityProduct: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "productcart",
    timestamps: false,
  }
);

Cart.belongsToMany(Product, { through: productCart });
Product.belongsToMany(Cart, { through: productCart });

module.exports = productCart;
