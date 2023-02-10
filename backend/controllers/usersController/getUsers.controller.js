const UserModel = require("../../models/users.model");

const getUsers = async (req, res) => {
    const id = req.params.id
  try {
    if(!id){
        const user = await UserModel.find();
        res.send(user);
    }else{
        const user = await UserModel.findById({_id: id});
        res.send(user);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = getUsers;
