require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users.model");

const registerUser = async (req, res) => {
  const { firstname, lastname, email,number, gender, password } = req.body;
  try {
    const hashPassword = await argon2.hash(password);
    const user = new UserModel({
      firstname,
      lastname,
      email,
      gender,
      number,
      avatar:
        gender === "male"
          ? "https://res.cloudinary.com/dyv0uxpi2/image/upload/v1676217724/2289_SkVNQSBGQU1PIDEwMjgtMTIy_hmkupv.jpg"
          : "https://res.cloudinary.com/dyv0uxpi2/image/upload/v1676217657/2289_SkVNQSBGQU1PIDEwMjgtMTEz_wf9gpj.jpg",
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
      description: "Successfully Registered to Sneakyours World",
      token,
      user
    });
  } catch (error) {
    res.send({ message: "failed", description: error.message });
  }
};

module.exports = registerUser;
