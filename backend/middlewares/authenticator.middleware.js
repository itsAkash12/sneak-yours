require("dotenv").config();
const jwt = require("jsonwebtoken");
const authenticator = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
      console.log(decodedToken);
      if (decodedToken) {
        req.userId = decodedToken.id;
        next();
      } else {
        res.send({
          message:"failed",
          description: "You are not authorized for this action. Please Login again",
        });
      }
    } else {
      res.send({
        message:"failed",
        description: "You are not authorized for this action. Please Login again",
      });
    }
  } catch (error) {
    res.send({
      message:"failed",
      description: "You are not authorized for this action. Please Login again",
    });
  }
};

module.exports = authenticator;
