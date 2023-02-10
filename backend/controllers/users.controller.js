const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");

const registerUser = async ({
  firstname,
  lastname,
  email,
  gender,
  password,
}) => {
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
  return {
    message: "success",
    description: "User Created Successfully",
    token,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (user) {
    const verify = await argon2.verify(user.password, password);
    if (verify) {
      const details = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      const token = jwt.sign(details, process.env.SECRET_KEY, {
        expiresIn: "2 days",
      });
      return {
        message: "success",
        description: "Logged In Successfully",
        token,
      };
    } else {
      return { message: "failure", description: "Wrong Credentials" };
    }
  } else {
    return { message: "failure", description: "Invalid Credentials" };
  }
};

module.exports = { registerUser, loginUser };
