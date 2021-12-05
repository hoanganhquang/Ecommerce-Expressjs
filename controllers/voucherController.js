exports.voucherList = (req, res) => {
  res.render("dashboard/voucher/voucher-list");
};

exports.addVoucher = (req, res) => {
  res.render("dashboard/voucher/add-voucher");
};

exports.editVoucher = (req, res) => {
  res.render("dashboard/voucher/edit-voucher");
};
