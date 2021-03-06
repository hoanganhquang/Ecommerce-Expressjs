const express = require("express");
const router = express.Router();

const dashboard = require("../controllers/dashboardController");
const auth = require("../controllers/authController");

router.use(auth.protect);

// DB main page
router.get("/", dashboard.index);

module.exports = router;
