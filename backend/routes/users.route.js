require("dotenv").config();
const { Router } = require("express");
const UserModel = require("../models/users.model");
const { getUsers, registerUser, loginUser } = require("../controllers/usersController");
const { body } = require("express-validator");
const validate = require("../middlewares/validator.middleware");
const users = Router();

users.get("/", getUsers);
users.get("/:id", getUsers);
users.post(
  "/register",
  validate,
  [
    body("firstname", "Please enter your first name").not().isEmpty(),
    body("lastname", "Please enter your last name").not().isEmpty(),
    body("email", "Please enter your email").isEmail().isEmpty(),
    body("gender", "Please enter your gender").not().isEmpty(),
    body("password", "Please enter your password").isLength({ min: 8 }),
  ],
  registerUser
);
users.post("/login", validate, loginUser);


module.exports = users;
