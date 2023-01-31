require("dotenv").config();
const { Router } = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");
const users = Router();

users.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
});

users.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    const user = new UserModel({ name, email, password: hashPassword });
    await user.save();
    res.send({ message: "Signup Successfully" });
  } catch (error) {
    res.send(error);
  }
});

users.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const hashPassword = user.password;
      const decodedPassword = await argon2.verify(hashPassword, password);
      if (decodedPassword) {
        const details = {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        const token = jwt.sign(details, process.env.SECRET_KEY, {
          expiresIn: "2 days",
        });
        return res.send({ message: "Logged In Successfully", token });
      } else {
        return res.send({ message: "Invalid User Credentials" });
      }
    } else {
      res.send({ message: "Invalid User Credentials" });
    }
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = users;
