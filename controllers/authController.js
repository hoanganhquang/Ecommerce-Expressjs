const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");
const Category = require("../models/categoryModel");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
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

exports.signUp = catchAsync(async (req, res, next) => {
  const password = await bcrypt.hash(req.body.password, 12);

  req.body.password = password;
  let newUser;
  try {
    newUser = await User.create(req.body);
  } catch (error) {
    return next(new Error("Email đã được đăng ký"));
  }

  createSendToken(newUser, req, res);

  res.locals.user = newUser;

  res.redirect("/profile");
});

exports.login = catchAsync(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
    raw: true,
  });

  if (!user) {
    return res.render("home/auth", {
      error: "Sai thông tin email",
    });
  }

  const match = await bcrypt.compare(req.body.password, user.password);

  if (match) {
    createSendToken(user, req, res);

    res.locals.user = user;

    res.redirect("/profile");
  } else {
    res.render("home/auth", {
      error: "Sai thông tin mật khẩu",
    });
  }
});

exports.isLoggedIn = async (req, res, next) => {
  const cataLog = await Category.findAll({
    raw: true,
  });
  try {
    let token = req.cookies.jwt;

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findByPk(decoded.id, {
      raw: true,
    });
    const cataLog = await Category.findAll({
      raw: true,
    });
    res.locals.user = currentUser;
    res.locals.cataLog = cataLog;

    req.user = currentUser;
    next();
  } catch (error) {
    res.locals.cataLog = cataLog;
    next();
  }
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(new Error("Bạn cần đăng nhập"));
  }
  const cataLog = await Category.findAll({
    raw: true,
  });

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (!decoded) {
    return next(new Error("Bạn cần đăng nhập"));
  }

  const user = await User.findByPk(decoded.id);
  req.user = user;
  res.locals.user = req.user;
  res.locals.cataLog = cataLog;

  next();
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.redirect("/");
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    const user = req.user;

    if (roles.indexOf(user.role) === -1) {
      return next(new Error("Không được uỷ quyền"));
    }

    next();
  };
};

exports.auth = (req, res) => {
  res.render("home/auth");
};
