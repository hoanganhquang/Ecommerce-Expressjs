const express = require("express");
const router = express.Router();

const category = require("../controllers/categoryController");
const auth = require("../controllers/authController");
const imageHandle = require("../utils/imageHandle");

router.use(auth.protect, auth.restrictTo("admin"));

router.get("/del/:id", category.deleteCategory);

// add category
router
  .route("/add")
  .get(category.addCategory)
  .post(imageHandle.uploadPhoto, imageHandle.resizePhoto, category.addCategory);

// edit category
router
  .route("/:id")
  .get(category.editCategory)
  .patch(
    imageHandle.uploadPhoto,
    imageHandle.resizePhoto,
    category.editCategory
  );

// category list
router.get("/", category.categoryList);

module.exports = router;
