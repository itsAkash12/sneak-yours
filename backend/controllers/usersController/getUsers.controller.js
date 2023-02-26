const UserModel = require("../../models/users.model");

const getUsers = async (req, res) => {
    const id = req.params.id
    const {page} = req.query;
  try {
    if(!id){
        const user = await UserModel.find().limit(12)
        .skip((page - 1) * 12);
        let userCount=0;
        for(let i=0; i<user.length; i++){
          userCount++;
        }
        res.send({user,userCount});
    }else{
        const user = await UserModel.findById({_id: id});
        res.send(user);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = getUsers;
