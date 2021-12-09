const express = require("express");
const router = express.Router();

const profile = require("../controllers/profileController");
const auth = require("../controllers/authController");
const imageHandle = require("../utils/imageHandle");

router.use(auth.protect);

router.patch(
  "/:id",
  imageHandle.uploadPhoto,
  imageHandle.resizePhoto,
  profile.editProfile
);

router.get("/", profile.profile);

module.exports = router;
