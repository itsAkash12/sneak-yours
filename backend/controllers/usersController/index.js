const getUsers = require("./getUsers.controller");
const registerUser = require("./register.controller");
const loginUser = require("./login.controller");
const deleteUser = require("./deleteUsers.controller");
const updateUser = require("./updateUser.controller");

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  deleteUser,
  updateUser
};
