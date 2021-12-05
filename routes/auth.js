const router = require("express").Router();

// Controller
const auth = require("../controllers/authController");

router.get("/auth", auth.auth);

module.exports = router;
