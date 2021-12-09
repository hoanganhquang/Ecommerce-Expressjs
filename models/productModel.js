const { DataTypes } = require("sequelize");

const Category = require("./categoryModel");

const sequelize = require("./DBConfig");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    quantityInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buyPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "user",
    },
  },
  {
    timestamps: false,
  }
);

Category.hasMany(Product);
Product.belongsTo(Category, {
  foreignKey: "categoryId",
});

module.exports = Product;
