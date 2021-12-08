const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.profile = catchAsync(async (req, res) => {
  const curUser = req.user;
  console.log(curUser.dataValues);
  res.render("dashboard/profile", {
    curUser,
  });
});
