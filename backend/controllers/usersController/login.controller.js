require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/users.model");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      const verify = await argon2.verify(user.password, password);
      if (verify) {
        const details = {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          gender: user.gender,
          email: user.email,
          role: user.role,
        };
        const token = jwt.sign(details, process.env.SECRET_KEY, {
          expiresIn: "2 days",
        });
        const options = {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
        return res.status(200).cookie("token", token, options).send({
          message: "success",
          description: "Logged In Successfully",
          token,
        });
      } else {
        return res.status(401).send({ message: "failure", description: "Wrong Credentials" });
      }
    } else {
      return res.status(401).send({ message: "failure", description: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(401).send({ message: "failure", description: error.message });
  }
};

module.exports = loginUser
