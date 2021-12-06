const router = require("express").Router();

// Controller
const auth = require("../controllers/authController");

router.post("/sign-up", auth.signUp);

router.get("/auth", auth.auth);

module.exports = router;
