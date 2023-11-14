const mongoose = require("../database/mongoose");

const productSchema = new mongoose.Schema({
  code: { type: Number, required: true },
  status: {
    type: String,
    enum: ["draft", "trash", "published"],
    required: true,
  },
  imported_t: { type: Date, required: true },
  url: { type: String, required: true },
  creator: { type: String, required: true },
  created_t: { type: Number, required: true },
  last_modified_t: { type: Number, required: true },
  product_name: { type: String, required: true },
  quantity: { type: String, required: true },
  brands: { type: String, required: true },
  categories: { type: String, required: true },
  labels: { type: String, required: true },
  cities: { type: String },
  purchase_places: { type: String },
  stores: { type: String },
  ingredients_text: { type: String, required: true },
  traces: { type: String },
  serving_size: { type: String, required: true },
  serving_quantity: { type: Number, required: true },
  nutriscore_score: { type: Number, required: true },
  nutriscore_grade: { type: String, required: true },
  main_category: { type: String, required: true },
  image_url: { type: String },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
