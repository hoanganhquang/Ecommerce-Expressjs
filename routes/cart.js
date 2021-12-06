const router = require("express").Router();

// Controller
const cart = require("../controllers/cartController");

router.get("/cart", cart.cart);

module.exports = router;
