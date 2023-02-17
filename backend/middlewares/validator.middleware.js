const UserModel = require("../models/users.model");

const validate = async(req, res, next) => {
  if (req.path === "/register") {
    const { firstname, lastname, email, gender, password } = req.body;
    const user = await UserModel.find({email});
    if(user){
      return res.send({ message:"failed", description:"Email is already Registered" })
    }else {
      next();
    }
  } else if (req.path === "/login") {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message:"failed", description:"All the necessary fields Should be filled" });
    } else {
      next();
    }
  } else {
    return res.send({ message:"failed", description:"not a valid route" });
  }
};

module.exports = validate;
