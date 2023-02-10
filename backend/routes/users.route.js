require("dotenv").config();
const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/users.controller");
const UserModel = require("../models/users.model")
const users = Router();
const validate = require("../middlewares/validator.middleware")

users.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
});

users.post("/register", validate,  async (req, res) => {
  const {firstname,lastname,email,gender,password} = req.body;
  try {
    const result = await registerUser({firstname,lastname,email,gender,password});
    if(result.message != "success"){
      return res.send({message:"failure", description:"error while creating the user"});
    }
    return res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

users.post("/login", validate , async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginUser({email, password});
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = users;
