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
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    await user.save();
    res.status(200).cookie("token", token, options).send({
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
