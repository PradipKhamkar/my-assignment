const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
  },

  description: {
    type: String,
    required: [true, "please enter description"],
  },

  status: {
    type: String,
    default: "Active",
    required: [true, "please enter status"],
  },
});

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
