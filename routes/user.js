const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");
const auth = require("../controllers/authController");

router.use(auth.protect);

// edit user
router.route("/:id").get(user.editUser).patch(user.editUser);

// user list
router.get("/", user.userList);

module.exports = router;
