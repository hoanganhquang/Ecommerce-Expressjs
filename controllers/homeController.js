const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");

exports.index = catchAsync(async (req, res, next) => {
  const allProducts = await Product.findAll({
    include: {
      model: Category,
    },
  });
  console.log(allProducts);
  res.render("home/index", {
    allProducts,
  });
});

exports.cataLog = catchAsync(async (req, res) => {
  let getOneCata = await Category.findAll({
    where: {
      name: req.query.name,
    },
    include: {
      model: Product,
    },
  });

  res.render("home/category", {
    getOneCata,
  });
});

exports.cart = (req, res) => {
  res.render("home/cart");
};
