const catchAsync = require("../utils/catchAsync");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const Voucher = require("../models/voucherModel");

exports.cart = catchAsync(async (req, res) => {
  let user = req.user;
  user = user.dataValues;

  let allItem = await User.findAll({
    where: {
      id: user.id,
    },
    include: {
      model: Product,
    },
  });

  const vouchers = await Voucher.findAll();

  allItem = allItem[0].dataValues;
  res.render("home/cart", {
    allItem,
    vouchers,
  });
});

exports.addCart = catchAsync(async (req, res) => {
  let user = req.user;
  user = user.dataValues;

  await Cart.create({
    userId: user.id,
    productId: req.params.id,
  });

  res.redirect("/carts");
});

exports.delCart = catchAsync(async (req, res) => {
  let user = req.user;
  user = user.dataValues;

  await Cart.destroy({
    where: {
      userId: user.id,
      productId: req.params.id,
    },
  });

  res.redirect("/carts");
});
