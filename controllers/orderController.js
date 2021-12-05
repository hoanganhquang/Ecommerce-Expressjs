exports.orderList = (req, res) => {
  res.render("dashboard/order/order-list");
};

exports.editOrder = (req, res) => {
  res.render("dashboard/order/edit-order");
};

exports.orderDetail = (req, res) => {
  res.render("dashboard/order/order-detail");
};
