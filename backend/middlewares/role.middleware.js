require("dotenv").config();
const jwt = require("jsonwebtoken");
const roleChecker = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.send({
        message: "failed request",
        description: "you are not authorized for this action",
      });
    } else {
      let verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      if (verifyToken) {
        if(verifyToken.role !== "Admin"){
            return res.send({
                message: "failed request",
                description: "you are not authorized for this action",
              });
        }else{
            next();
        }
      } else {
        return res.send({
          message: "failed request",
          description: "you are not authorized for this action",
        });
      }
    }
  } catch (error) {
    res.send({
      message: "failed request",
      description: error.message,
    });
  }
};

module.exports = roleChecker
