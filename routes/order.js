const express = require("express");
const router = express.Router();

const order = require("../controllers/orderController");
const auth = require("../controllers/authController");

router.use(auth.protect);

// order detail list
router.get("/details", order.orderDetails);

// edit order
router.get("/:id", order.editOrder);

router.post("/add", order.addOrder);

// order list
router.get("/", order.orderList);

module.exports = router;
