const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "category",
    required: [true, "category must required"],
  },
  image: {
    type: String,
    required: [true, "please enter image url"],
  },
  packSize: {
    type: String,
    required: [true, "please enter packName"],
  },
  mrp: {
    type: String,
    required: [true, "please enter mrp"],
  },
  status: {
    type: String,
    default: "Active",
    required: [true, "please enter status"],
  },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
