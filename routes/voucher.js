const express = require("express");
const router = express.Router();

const voucher = require("../controllers/voucherController");
const auth = require("../controllers/authController");

router.use(auth.protect);
// add voucher
router.get("/add", voucher.addVoucher);

// edit voucher
router.get("/edit/:id", voucher.editVoucher);

// voucher list
router.get("/", voucher.voucherList);

module.exports = router;
