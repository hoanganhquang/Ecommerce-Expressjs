exports.orderList = (req, res) => {
  res.render("dashboard/order/order-list");
};

exports.addOrder = (req, res) => {
  res.render("dashboard/order/add-order");
};

exports.editOrder = (req, res) => {
  res.render("dashboard/order/edit-order");
};
