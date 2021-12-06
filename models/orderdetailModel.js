const { Sequelize, DataTypes } = require("sequelize");

const Order = require("./orderModel");
const Product = require("./productModel");

const sequelize = new Sequelize();

const Orderdetail = sequelize.define("orderdetail", {
  orderNumber: {
    type: DataTypes.INTEGER,
    references: {
      model: "order",
      key: "orderNumber",
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id",
    },
  },
  quantityOrdered: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Order.belongsToMany(Product, { through: Orderdetail });
Product.belongsToMany(Order, { through: Orderdetail });

module.exports = Orderdetail;
