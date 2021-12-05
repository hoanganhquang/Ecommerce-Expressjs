const express = require("express");
const router = express.Router();

const category = require("../controllers/categoryController");

// add category
router.get("/add", category.addCategory);

// edit category
router.get("/edit/:id", category.editCategory);

// category list
router.get("/", category.categoryList);

module.exports = router;
