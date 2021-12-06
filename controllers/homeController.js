const Category = require("../models/categoryModel");

exports.index = async (req, res) => {
  try {
    const allCategory = await Category.findAll();
    console.log(allCategory);
    res.render("home/index", {
      allCategory,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.category = (req, res) => {
  res.render("home/category");
};

exports.cart = (req, res) => {
  res.render("home/cart");
};
