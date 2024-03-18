const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  img_url: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
