const express = require("express");
const router = express.Router();

const voucher = require("../controllers/voucherController");
const auth = require("../controllers/authController");

router.use(auth.protect);

// delete
router.get("/delete/:id", voucher.deleteVoucher);

// add voucher
router.route("/add").get(voucher.addVoucher).post(voucher.addVoucher);

// edit voucher
router.get("/edit/:id", voucher.editVoucher);

// voucher list
router.get("/", voucher.voucherList);

module.exports = router;
