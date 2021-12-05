exports.paymentList = (req, res) => {
  res.render("dashboard/payment/payment-list");
};

exports.addPayment = (req, res) => {
  res.render("dashboard/payment/add-payment");
};

exports.editPayment = (req, res) => {
  res.render("dashboard/payment/edit-payment");
};
