const express = require("express");
const router = express.Router();

const payment = require("../controllers/paymentController");

// payment list
router.get("/", payment.paymentList);

module.exports = router;
