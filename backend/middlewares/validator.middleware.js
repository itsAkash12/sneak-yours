const validate = (req, res, next) => {
  if (req.path === "/register") {
    const { firstname, lastname, email, gender, password } = req.body;
    if (password.length < 8) {
      return res.send({
        message:
          "Password must be more than or of 8 digits",
      });
    } else {
      next();
    }
  } else if (req.path === "/login") {
    const { email, password } = req.body;
    if (!email) {
      return res.send({ message: "All the necessary fields Should be filled" });
    } else {
      next();
    }
  } else {
    return res.send({ message: "not a valid route" });
  }
};

module.exports = validate;
