const Payment = require("../models/paymentModel");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.paymentList = catchAsync(async (req, res) => {
  const payments = await Payment.findAll({
    include: {
      model: User,
    },
  });
  console.log(payments);
  res.render("dashboard/payment/payment-list", {
    payments,
  });
});
