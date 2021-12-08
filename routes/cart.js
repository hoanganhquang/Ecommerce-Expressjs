const router = require("express").Router();

// Controller
const cart = require("../controllers/cartController");
const auth = require("../controllers/authController");

router.use(auth.protect);

router.get("/del/:id", cart.delCart);

router.get("/add/:id", cart.addCart);

router.get("/", cart.cart);

module.exports = router;
