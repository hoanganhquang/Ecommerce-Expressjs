exports.index = (req, res) => {
  res.render("home/index");
};

exports.category = (req, res) => {
  res.render("home/category");
};

exports.cart = (req, res) => {
  res.render("home/cart");
};
