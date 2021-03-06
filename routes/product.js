const express = require("express");
const router = express.Router();

const product = require("../controllers/productController");
const auth = require("../controllers/authController");
const imageHandle = require("../utils/imageHandle");

router.use(auth.protect, auth.restrictTo("admin"));

router.get("/del/:id", product.deleteProduct);

// add product
router
  .route("/add")
  .get(product.addProduct)
  .post(imageHandle.uploadPhoto, imageHandle.resizePhoto, product.addProduct);

// edit product
router
  .route("/:id")
  .get(product.editProduct)
  .patch(imageHandle.uploadPhoto, imageHandle.resizePhoto, product.editProduct);

// product list
router.get("/", product.productList);

module.exports = router;
