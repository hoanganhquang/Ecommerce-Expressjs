const express = require("express");
const router = express.Router();

const product = require("../controllers/productController");
const auth = require("../controllers/authController");

router.use(auth.protect);
// add product
router.route("/add").get(product.addProduct).post(product.addProduct);

// edit product
router.get("/edit/:id", product.editProduct);

// product list
router.get("/", product.productList);

module.exports = router;
