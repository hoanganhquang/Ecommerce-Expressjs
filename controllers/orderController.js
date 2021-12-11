const catchAsync = require("../utils/catchAsync");
const Order = require("../models/orderModel");
const Orderdetail = require("../models/orderdetailModel");
const Payment = require("../models/paymentModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const User = require("../models/userModel");

exports.orderList = catchAsync(async (req, res) => {
  let orders = await Order.findAll({
    attributes: {
      exclude: ["voucherVoucherCode"],
    },
  });

  if (req.user.role == "user") {
    orders = await Order.findAll({
      attributes: {
        exclude: ["voucherVoucherCode"],
      },
      where: {
        userId: req.user.id,
      },
      include: {
        model: User,
      },
    });
  }
  res.render("dashboard/order/order-list", {
    orders,
  });
});

exports.addOrder = catchAsync(async (req, res) => {
  let { productId, quantityOrdered, total } = req.body;
  const newOrder = await Order.create({
    userId: req.user.dataValues.id,
    total: req.body.total,
  });
  console.log(req.body);
  await Cart.destroy({
    where: {},
    truncate: true,
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

  res.redirect("/orders");
});

exports.editOrder = (req, res) => {
  res.render("dashboard/order/edit-order");
};

exports.orderDetails = catchAsync(async (req, res) => {
  let allDetail = await Order.findAll({
    include: {
      model: Product,
    },
    attributes: {
      exclude: "voucherVoucherCode",
    },
  });

  if (req.user.role == "user") {
    allDetail = await Order.findAll({
      attributes: {
        exclude: ["voucherVoucherCode"],
      },
      include: {
        model: Product,
      },
      where: {
        userId: req.user.id,
      },
    });
  }
  res.render("dashboard/order/order-detail", {
    allDetail,
  });
});
