const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const catchAsync = require("../utils/catchAsync");

exports.productList = catchAsync(async (req, res) => {
  const allProducts = await Product.findAll({
    include: {
      model: Category,
      attributes: ["name"],
    },
  });

  res.render("dashboard/product/product-list", { allProducts });
});

exports.addProduct = catchAsync(async (req, res) => {
  const allCategory = await Category.findAll();

  if (req.method == "POST") {
    await Product.create(req.body);
    res.redirect("back");
  }

  res.render("dashboard/product/add-product", {
    allCategory,
  });
});

exports.editProduct = catchAsync(async (req, res) => {
  if (req.method == "PATCH") {
    console.log(req.body);
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/products");
  }
  let allCategory = await Category.findAll();

  let product = await Product.findAll({
    include: {
      model: Category,
      attributes: ["name", "id"],
    },
    where: {
      id: req.params.id,
    },
  });
  product = product[0].dataValues;

  res.render("dashboard/product/edit-product", {
    product,
    allCategory,
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/products");
});
