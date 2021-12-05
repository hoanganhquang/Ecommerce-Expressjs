const express = require("express");
const router = express.Router();

const voucher = require("../controllers/voucherController");

// add voucher
router.get("/add", voucher.addVoucher);

// edit voucher
router.get("/edit/:id", voucher.editVoucher);

// voucher list
router.get("/", voucher.voucherList);

module.exports = router;
