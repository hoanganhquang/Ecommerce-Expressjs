const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcrypt");

exports.profile = catchAsync(async (req, res) => {
  const curUser = req.user;
  let err;
  console.log(req.err);
  if (req.err) {
    err = req.err;
  } else {
    err = false;
  }
  res.render("dashboard/profile", {
    curUser,
    err,
  });
});

exports.editProfile = catchAsync(async (req, res, next) => {
  if (req.body.newPassword) {
    const getUser = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    const check = await bcrypt.compare(req.body.curPassword, getUser.password);
    if (check) {
      const password = await bcrypt.hash(req.body.newPassword, 12);
      await User.update(
        { password },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.redirect("back");
    } else {
      return next(new Error("Mật khẩu hiện tại không chính xác"));
    }
  }
  if (req.file) {
    req.body.image = req.file.originalname;
  }
  await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  res.redirect("back");
});
