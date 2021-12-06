const router = require("express").Router();

// Controller
const cart = require("../controllers/cartController");
const auth = require("../controllers/authController");

router.use(auth.protect);

router.get("/cart", cart.cart);

module.exports = router;
