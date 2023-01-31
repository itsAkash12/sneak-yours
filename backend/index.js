require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const connect = require("./config/db");
const users = require("./routes/users.route");
const authenticator = require("./middlewares/authenticator.middleware");
const products = require("./routes/products.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/users", users);
app.use(authenticator);
app.use("/products", products);

app.listen(PORT, () => {
  connect();
  console.log(`server started on http://localhost:${PORT}`);
});
