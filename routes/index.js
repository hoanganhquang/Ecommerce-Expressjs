const express = require("express");
const router = express.Router();

// Controller
const auth = require("../controllers/authController");
const home = require("../controllers/homeController");

// Router
const authRouter = require("./auth");
const cartRouter = require("./cart");

// Login/register page
router.use(authRouter);

// Cart page
router.use(cartRouter);

router.use(auth.isLoggedIn);

// Catalog page
router.get("/cata-log", home.cataLog);

/* GET home page. */
router.get("/", home.index);

module.exports = router;
