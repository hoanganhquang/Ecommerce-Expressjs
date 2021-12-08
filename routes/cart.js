const router = require("express").Router();

// Controller
const cart = require("../controllers/cartController");
const auth = require("../controllers/authController");

router.get("/cart", auth.protect, cart.cart);

module.exports = router;
