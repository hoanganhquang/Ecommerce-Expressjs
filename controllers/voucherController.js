const Voucher = require("../models/voucherModel");
const catchAsync = require("../utils/catchAsync");

exports.voucherList = catchAsync(async (req, res) => {
  const allVoucher = await Voucher.findAll();

  res.render("dashboard/voucher/voucher-list", {
    allVoucher,
  });
});

exports.addVoucher = catchAsync(async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    await Voucher.create(req.body);

    res.redirect("/vouchers");
  }

  res.render("dashboard/voucher/add-voucher");
});

exports.editVoucher = catchAsync(async (req, res) => {
  if (req.method == "PATCH") {
    await Voucher.update(req.body, {
      where: {
        voucherCode: req.params.id,
      },
    });

    res.redirect("/vouchers");
  }
  const voucher = await Voucher.findOne({
    where: {
      voucherCode: req.params.id,
    },
  });
  console.log(voucher);
  res.render("dashboard/voucher/edit-voucher", {
    voucher,
  });
});

exports.deleteVoucher = catchAsync(async (req, res) => {
  await Voucher.destroy({
    where: {
      voucherCode: req.params.id,
    },
  });

  res.redirect("/vouchers");
});
