const express = require("express");
const router = express.Router();

const payment = require("../controllers/paymentController");
const auth = require("../controllers/authController");

router.use(auth.protect);
// payment list
router.get("/", payment.paymentList);

module.exports = router;
