const express = require("express");
const {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} = require("../controller/productController");
const isAuthUser = require("../middlewares/isAuth");
const route = express.Router();

route.post("/add", isAuthUser, addProduct);
route.get("/allProduct", isAuthUser, getAllProducts);

route.put("/update/:productId", isAuthUser, updateProduct);
route.delete("/delete/:productId", isAuthUser, deleteProduct);

module.exports = route;
