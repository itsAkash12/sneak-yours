require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const connect = require("./config/db");
const {users, products, orders, carts,wishlists} = require("./routes")
const authenticator = require("./middlewares/authenticator.middleware");
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}))

app.get("/", (req,res)=> {
  res.send({msg:"Welcome to Homepage"});
})

app.use("/users", users);
app.use("/products", products);
app.use("/carts",authenticator, carts);
app.use("/orders",authenticator, orders);
app.use("/wishlists",authenticator, wishlists);

app.listen(PORT, () => {
  connect();
  console.log(`server started on http://localhost:${PORT}`);
});
