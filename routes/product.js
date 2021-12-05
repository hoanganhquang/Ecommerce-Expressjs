const express = require("express");
const router = express.Router();

const product = require("../controllers/productController");

// add product
router.get("/add", product.addProduct);

// edit product
router.get("/edit/:id", product.editProduct);

// product list
router.get("/", product.productList);

module.exports = router;
