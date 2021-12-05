exports.productList = (req, res) => {
  res.render("dashboard/product/product-list");
};

exports.addProduct = (req, res) => {
  res.render("dashboard/product/add-product");
};

exports.editProduct = (req, res) => {
  res.render("dashboard/product/edit-product");
};
