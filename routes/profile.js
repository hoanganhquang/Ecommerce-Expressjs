const express = require("express");
const router = express.Router();

const profile = require("../controllers/profileController");
const auth = require("../controllers/authController");

router.use(auth.protect);

router.get("/", profile.profile);

module.exports = router;
