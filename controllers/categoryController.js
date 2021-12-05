exports.categoryList = (req, res) => {
  res.render("dashboard/category/category-list");
};

exports.addCategory = (req, res) => {
  res.render("dashboard/category/add-category");
};

exports.editCategory = (req, res) => {
  res.render("dashboard/category/edit-category");
};
