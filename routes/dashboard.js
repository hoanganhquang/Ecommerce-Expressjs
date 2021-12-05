const express = require("express");
const router = express.Router();

const dashboard = require("../controllers/dashboardController");

// profile
router.get("/profile", dashboard.profile);

// DB main page
router.get("/", dashboard.index);

module.exports = router;
