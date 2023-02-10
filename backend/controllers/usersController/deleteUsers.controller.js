const UserModel= require("../../models/users.model");

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.send({
        message: "failed Request",
        description: "Can't able to delete the User",
      });
    } else {
      const userId = await UserModel.findById({ _id: id });
      if (userId) {
        await UserModel.findByIdAndDelete({ _id: id });
        return res.send({
          message: "success",
          description: "User Deleted Successfully",
        });
      } else {
        return res.send({
          message: "failed Request",
          description: "Can't able to delete the User",
        });
      }
    }
  } catch (error) {
    res.send({
        message: "failed Request",
        description: error.message,
      })
  }
};
module.exports = deleteUser;
