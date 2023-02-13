const getUsers = require("./getUsers.controller");
const registerUser = require("./register.controller");
const loginUser = require("./login.controller");
const deleteUser = require("./deleteUsers.controller");
const updateUser = require("./updateUser.controller");
const forgotUser = require("./forgotUser.controller");
const logoutUser = require("./logoutUser.controller")

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
  forgotUser,
  logoutUser
};
