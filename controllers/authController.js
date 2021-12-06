const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");

const signToken = (id) => {
  return jwt.sign();
};

const createSendToken = (user, req, res) => {
  const token = signToken(user.id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;
};

exports.signUp = catchAsync(async (req, res) => {
  console.log(req.body);
  const password = await bcrypt.hash(req.body.password, 12);

  req.body.password = password;

  const newUser = await User.create(req.body);

  console.log(newUser);

  createSendToken(newUser, req, res);

  req.locals.user = newUser;

  res.redirect("/dashboard");
});

exports.login = catchAsync(async (req, res) => {
  const user = await User.findAll({
    where: {
      email: req.body.email,
    },
  });

  await bcrypt.compare(req.body.password, user.password);

  createSendToken(user, req, res);

  req.locals.user = user;

  res.redirect("/dashboard");
});

exports.auth = (req, res) => {
  res.render("home/auth");
};
