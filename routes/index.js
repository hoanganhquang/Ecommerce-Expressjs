const express = require("express");
const router = express.Router();

// Controller
const home = require("../controllers/homeController");
const authRouter = require("./auth");
const cartRouter = require("./cart");

// Login/register page
router.use(authRouter);

// Cart page
router.use(cartRouter);

// Catalog page
router.get("/cata-log", home.category);

/* GET home page. */
router.get("/", home.index);

module.exports = router;
