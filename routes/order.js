const express = require("express");
const router = express.Router();

const order = require("../controllers/orderController");

// add order
router.get("/add", order.addOrder);

// edit order
router.get("/edit/:id", order.editOrder);

// order list
router.get("/", order.orderList);

module.exports = router;
