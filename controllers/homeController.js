const Category = require("../models/categoryModel");
const catchAsync = require("../utils/catchAsync");

exports.index = catchAsync(async (req, res, next) => {
  const allCategory = await Category.findAll();
  res.render("home/index", {
    allCategory,
  });
});

exports.category = (req, res) => {
  res.render("home/category");
};

exports.cart = (req, res) => {
  res.render("home/cart");
};
