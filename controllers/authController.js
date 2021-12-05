const jwt = require("jsonwebtoken");
const crypto = require("crypto");
// const catchAsync = require("../utils/catchAsync");

// const signToken = (id) => {
//   return jwt.sign();
// };

exports.auth = (req, res) => {
  res.render("home/auth");
};
