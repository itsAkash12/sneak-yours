const UserModel = require("../../models/users.model");

const updateUser = async (req, res) => {
  const _id = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({_id}, payload);
    res.send({message:"failed", description: `Update The user Data Whose ID Is ${_id}`});
  } catch (error) {
    res.send({message:"failed", description: error.message});
  }
};

module.exports = updateUser;
