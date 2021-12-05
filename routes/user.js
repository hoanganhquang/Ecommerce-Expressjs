const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");

// edit user
router.get("/edit/:id", user.editUser);

// user list
router.get("/", user.userList);

module.exports = router;
