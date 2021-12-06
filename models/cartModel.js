const { DataTypes } = require("sequelize");

const User = require("./userModel");

const sequelize = require("./DBConfig");

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: "cart",
    timestamps: false,
  }
);

User.hasOne(Cart);
Cart.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = Cart;
