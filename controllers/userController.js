exports.userList = (req, res) => {
  res.render("dashboard/user/user-list");
};

exports.addUser = (req, res) => {
  res.render("dashboard/user/add-user");
};

exports.editUser = (req, res) => {
  res.render("dashboard/user/edit-user");
};
