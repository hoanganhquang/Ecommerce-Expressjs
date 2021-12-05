const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");

// add user
router.get("/add", user.addUser);

// edit user
router.get("/edit/:id", user.editUser);

// user list
router.get("/", user.userList);

module.exports = router;
