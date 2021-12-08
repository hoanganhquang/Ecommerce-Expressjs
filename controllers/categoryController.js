const Category = require("../models/categoryModel");
const catchAsync = require("../utils/catchAsync");

exports.categoryList = catchAsync(async (req, res) => {
  const allCategory = await Category.findAll();
  res.render("dashboard/category/category-list", { allCategory });
});

exports.addCategory = catchAsync(async (req, res) => {
  if (req.method == "POST") {
    await Category.create(req.body);
    res.redirect("back");
  }

  res.render("dashboard/category/add-category");
});

exports.editCategory = catchAsync(async (req, res) => {
  if (req.method == "PATCH") {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/category");
  }

  let category = await Category.findAll({
    where: {
      id: req.params.id,
    },
    raw: true,
  });

  category = category[0];

  res.render("dashboard/category/edit-category", {
    category,
  });
});
