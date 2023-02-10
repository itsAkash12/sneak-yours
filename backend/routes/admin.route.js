const { Router } = require("express");
const {
  getUsers,
  getProducts,
  deleteUser,
  createProduct,
} = require("../controllers/admin.controller");


const admin = Router();

admin.get("/", (req, res) => {
  res.send("This is Admin Route");
});

// USERS RELATED TO ADMIN ROUTE

admin.get("/users", async (req, res) => {
  try {
    const result = await getUsers();
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});
admin.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getUsers(id);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

admin.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteUser(id);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

// PRODUCTS RELATED TO ADMIN ROUTE

admin.get("/products", async (req, res) => {
  try {
    const result = await getProducts();
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

admin.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getProducts(id);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

admin.post("/products/add", async(req, res) => {
  const payload = req.body;
  const photos = [...req.files.images];
  try {
    const result = await createProduct(photos, payload);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

admin.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProduct(id);
    res.send(result);
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = admin;
