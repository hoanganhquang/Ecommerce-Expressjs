const express = require("express");
const router = express.Router();

// Controller
const auth = require("../controllers/authController");
const home = require("../controllers/homeController");

// Router
const authRouter = require("./auth");

// Login/register page
router.use(authRouter);

router.use(auth.isLoggedIn);

// Catalog page
router.get("/cata-log", home.cataLog);

/* GET home page. */
router.get("/", home.index);

module.exports = router;
