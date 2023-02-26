require("dotenv").config();
const { Router } = require("express");
const UserModel = require("../models/users.model");
const { getUsers, registerUser, loginUser, deleteUser, updateUser, forgotUser, logoutUser } = require("../controllers/usersController");
const { body } = require("express-validator");
const validate = require("../middlewares/validator.middleware");
const roleChecker = require("../middlewares/role.middleware");
const users = Router();

users.get("/",roleChecker, getUsers);
users.post(
  "/register",
  [
    body("firstname", "Please enter your first name").not().isEmpty(),
    body("lastname", "Please enter your last name").not().isEmpty(),
    body("email", "Please enter your email").isEmail().isEmpty(),
    body("gender", "Please enter your gender").not().isEmpty(),
    body("password", "Please enter your password").not().isEmpty(),
  ],
  registerUser
  );
  users.post("/login", validate, loginUser);
  users.get("/get/:id", getUsers);
  users.delete("/delete/:id", roleChecker, deleteUser);
users.patch("/update/:id", updateUser);
users.get("/forgot/reset",validate, forgotUser);
users.get("/logout",validate, logoutUser);


module.exports = users;
