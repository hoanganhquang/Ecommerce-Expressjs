const express = require("express");
const router = express.Router();

const payment = require("../controllers/paymentController");

// add payment
router.get("/add", payment.addPayment);

// edit payment
router.get("/edit/:id", payment.editPayment);

// payment list
router.get("/", payment.paymentList);

module.exports = router;
