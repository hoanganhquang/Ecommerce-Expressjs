const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.userList = catchAsync(async (req, res) => {
  const allUsers = await User.findAll();

  res.render("dashboard/user/user-list", {
    allUsers,
  });
});

exports.editUser = catchAsync(async (req, res) => {
  if (req.method == "PATCH") {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/users");
  }

  let curUser = await User.findAll({
    where: {
      id: req.params.id,
    },
  });
  curUser = curUser[0].dataValues;

  res.render("dashboard/user/edit-user", {
    curUser,
  });
});
