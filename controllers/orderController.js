const catchAsync = require("../utils/catchAsync");
const Order = require("../models/orderModel");
const Orderdetail = require("../models/orderdetailModel");
const Payment = require("../models/paymentModel");

exports.orderList = catchAsync(async (req, res) => {
  const orders = await Order.findAll({
    attributes: {
      exclude: ["voucherVoucherCode"],
    },
  });
  res.render("dashboard/order/order-list", {
    orders,
  });
});

exports.addOrder = catchAsync(async (req, res) => {
  console.log(req.body);
  let { productId, quantityOrdered, total } = req.body;
  const newOrder = await Order.create({
    userId: req.user.dataValues.id,
    total: req.body.total,
  });

  await Payment.create({
    userId: req.user.dataValues.id,
    amount: total,
  });

  if (Array.isArray(productId)) {
    const newData = productId.map((value, i) => {
      return {
        orderNumber: newOrder.dataValues.orderNumber,
        productId: value,
        quantityOrdered: quantityOrdered[i],
      };
    });

    const newOrDe = await Orderdetail.bulkCreate(newData);
  } else {
    const newOrDe = await Orderdetail.create({
      orderNumber: newOrder.dataValues.orderNumber,
      productId: productId,
      quantityOrdered: quantityOrdered,
    });
  }

  res.redirect("/");
});

exports.editOrder = (req, res) => {
  res.render("dashboard/order/edit-order");
};

exports.orderDetails = catchAsync(async (req, res) => {
  const allDetail = await Orderdetail.findAll({
    attributes: {
      exclude: ["orderOrderNumber"],
    },
  });

  res.render("dashboard/order/order-detail", {
    allDetail,
  });
});
