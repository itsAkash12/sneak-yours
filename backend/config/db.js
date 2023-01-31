require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("successfully connected to DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
