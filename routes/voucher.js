const express = require("express");
const router = express.Router();

const voucher = require("../controllers/voucherController");
const auth = require("../controllers/authController");

router.use(auth.protect, auth.restrictTo("admin"));

// delete
router.get("/del/:id", voucher.deleteVoucher);

// add voucher
router.route("/add").get(voucher.addVoucher).post(voucher.addVoucher);

// edit voucher
router.route("/:id").get(voucher.editVoucher).patch(voucher.editVoucher);

// voucher list
router.get("/", voucher.voucherList);

module.exports = router;
