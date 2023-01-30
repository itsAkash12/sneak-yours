const { Router } = require("express");
const argon2 = require("argon2")
const UserModel = require("../models/users.model")
const users = Router();

users.get("/", (req, res) => {
  res.send("This is users route");
});

users.post("/signup", async(req,res)=> {
    const {name, email, password} = req.body;
    const hashPassword = await argon2.hash(password)
    try {
        const user = new UserModel({name,email,password:hashPassword});
        await user.save();
        res.send({message:"Signup Sucessfully"})
    } catch (error) {
        res.send(error);
        console.log("error while signup")
    }
})

module.exports = users;
