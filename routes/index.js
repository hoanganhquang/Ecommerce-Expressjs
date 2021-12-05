const express = require("express");
const router = express.Router();

// Controller
const home = require("../controllers/homeController");
const authRouter = require("./auth");

// Login/register page
router.use(authRouter);

// Catalog page
router.get("/category", home.category);

// Catalog page
router.get("/cart", home.cart);

/* GET home page. */
router.get("/", home.index);

module.exports = router;
