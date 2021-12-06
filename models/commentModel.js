const { Sequelize, DataTypes } = require("sequelize");

const Product = require("./productModel");
const User = require("./userModel");

const sequelize = require("./DBConfig");

const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    commentDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Date.now(),
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Comment);
Comment.belongsTo(User, {
  foreignKey: "userId",
});

Product.hasMany(Comment);
Comment.belongsTo(Product, {
  foreignKey: "productId",
});

module.exports = Comment;
