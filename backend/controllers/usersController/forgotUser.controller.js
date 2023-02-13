const sendEmail = require("../../utils/SendEmail");

const forgotUser = async (req, res) => {
  const message = "hello there";
  try {
    await sendEmail({
      email: "akashviratsingh018@gmail.com",
      subject: `Ecommerce Password Recovery`,
      message,
    });
    res.status(200).json({
        success: true,
        message: `Email sent successfully`,
      });
  } catch (error) {
    res.status(200).json({
        success: false,
        message: error.message,
      });
  }
};

module.exports = forgotUser