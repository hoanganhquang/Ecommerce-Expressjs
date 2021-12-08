const catchAsync = require("../utils/catchAsync");
const Order = require("../models/orderModel");
const Orderdetail = require("../models/orderdetailModel");

exports.orderList = catchAsync(async (req, res) => {
  const orders = await Order.findAll();
  console.log(orders);
  res.render("dashboard/order/order-list");
});

exports.addOrder = catchAsync(async (req, res) => {
  console.log(req.body);
  req.body.userId = req.user.dataValues;
  console.log(req.body);
  const newOrder = await Order.create(req.body);
  console.log(newOrder);
  await Orderdetail.create({
    orderNumber: newOrder.orderNumber,
    productId: req.query.productId,
    quantityOrdered: req.query.quantityOrdered,
  });
  res.redirect("/");
});

exports.editOrder = (req, res) => {
  res.render("dashboard/order/edit-order");
};

exports.orderDetail = (req, res) => {
  res.render("dashboard/order/order-detail");
};
