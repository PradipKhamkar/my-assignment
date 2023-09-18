const express = require("express");
const {
  addCategory,
  getAllCategory,
  deleteCategory,
  updateCategory,
} = require("../controller/CategoryController");
const isAuthUser = require("../middlewares/isAuth");
const route = express.Router();

route.post("/add", isAuthUser, addCategory);
route.get("/allCategory", isAuthUser, getAllCategory);
route.put("/update/:categoryId", isAuthUser, updateCategory);
route.delete("/delete/:categoryId", isAuthUser, deleteCategory);

module.exports = route;
