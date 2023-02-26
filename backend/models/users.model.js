const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: [true, "Please enter first name"] },
  lastname: { type: String, required: [true, "Please enter last name"] },
  email: { type: String, required: [true, "Please enter email"], unique: true },
  gender: { type: String, required: [true, "Please enter gender"] },
  number: { type: String, required: [true, "Please enter number"] },
  role: { type: String, default: "Explorer" },
  avatar: { type: String },
  password: { type: String, required: [true, "Please enter valid password"], minLength:8 },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
