const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, default:"Explorer"},
    password:{type:String, required:true}
})

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;