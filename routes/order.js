const express = require("express");
const router = express.Router();

const order = require("../controllers/orderController");
const auth = require("../controllers/authController");

router.use(auth.protect);
// edit order
router.get("/edit/:id", order.editOrder);

// order detail list
router.get("/details", order.orderDetail);

// order list
router.get("/", order.orderList);

module.exports = router;
