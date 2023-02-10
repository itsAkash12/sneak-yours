require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users.model");

const registerUser = async (req, res) => {
  const { firstname, lastname, email, gender, password } = req.body;
  try {
    const hashPassword = await argon2.hash(password);
    const user = new UserModel({
      firstname,
      lastname,
      email,
      gender,
      password: hashPassword,
    });
    const token = jwt.sign(
      { id: user._id, firstname, lastname, email, gender },
      process.env.SECRET_KEY,
      { expiresIn: "2 days" }
    );
    await user.save();
    res.status(200).send({
      message: "success",
      description: "User Created Successfully",
      token,
    });
  } catch (error) {
    res.send({ message: "failed", description: error.message });
  }
};

module.exports = registerUser;
