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
  let { productId, quantityOrdered, total } = req.body;
  const newOrder = await Order.create({
    userId: req.user.dataValues.id,
    total: req.body.total,
  });
  const newData = productId.map((value, i) => {
    return {
      orderNumber: newOrder.dataValues.orderNumber,
      productId: value,
      quantityOrdered: quantityOrdered[i],
    };
  });

  const newOrDe = await Orderdetail.bulkCreate(newData);

  res.redirect("/");
});

exports.editOrder = (req, res) => {
  res.render("dashboard/order/edit-order");
};

exports.orderDetail = (req, res) => {
  res.render("dashboard/order/order-detail");
};
