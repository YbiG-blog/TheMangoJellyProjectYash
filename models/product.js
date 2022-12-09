require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 2 },
    price: {
      type: Number,
      required: true,
    },
    description: { type: String, required: true },
    brandName: {
      type: String,
      required: true,
    },
    RAM: {
      type: String,
      required: true,
    },
    internalStorage: {
      type: String,
      required: true,
    },
    screenSize: {
      type: String,
      required: true,
    },
    bookingAvailable: {
      type: String,
      default: "online",
      // offline
    },
  },
  { timestamps: true }
);

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
