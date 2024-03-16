const mongoose = require("mongoose");

const product = new mongoose.Schema({
  filename: {
    type: String,
  },
  fileId: {
    type: String,
  },
  price: {
    type: String,
  },
  keywords: {
    type: Array,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Products", product);
module.exports = Product;
