const express = require("express");
const router = express.Router();

const category = require("../controllers/categoryController");
const auth = require("../controllers/authController");

router.use(auth.protect);
// add category
router.route("/add").get(category.addCategory).post(category.addCategory);

// edit category
router.get("/:id", category.editCategory);

// category list
router.get("/", category.categoryList);

module.exports = router;
