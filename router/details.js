const express = require("express");
const router = new express.Router();
const Product = require("../models/product");

// view a particular product
router.get("/product/:id", async ({ params }, res) => {
  try {
    const product = await Product.findById(params.id, {
      _id: 0,
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });
    if (!product) {
      res.status(404).json({
        message: "Product not found with this id",
      });
      return;
    }
    res.status(200).json({
      res: product,
    });
  } catch (error) {
    return res.status(400).send(`error ${error}`);
  }
});
// view all Products
router.get("/register", async (req, res) => {
  try {
    const dataFind = await Product.find(
      {},
      {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      }
    );
    if (dataFind.lenght == 0) {
      res.status(404).json({ message: "no data found" });
      return;
    }
    res.status(200).json({ res: dataFind });
  } catch (error) {
    res.status(501).send(`error ${error}`);
  }
});

// create Product
router.post("/register", async ({ body }, res) => {
  try {
    const {
      name,
      price,
      productCategory,
      description,
      brandName,
      RAM,
      internalStorage,
      screenSize,
      bookingAvailable,
    } = body;
    const newData = new Product({
      name,
      price,
      productCategory,
      description,
      brandName,
      RAM,
      internalStorage,
      screenSize,
      bookingAvailable,
    });

    const saveData = await newData.save();
    res.status(201).json({ res: saveData });
  } catch (error) {
    res.status(400).send(`error ${error}`);
  }
});

// delete Product
router.delete("/product/:id", async ({ params }, res) => {
  try {
    const product = await Product.findByIdAndDelete(params.id);
    if (!product) {
      res.status(404).json({
        message: "Product not found with this id. So we can not delete.",
      });
      return;
    }
    res.status(200).json({
      message: "Product deleted",
    });
  } catch (error) {
    return res.status(400).send(`error ${error}`);
  }
});

// Update Product
router.patch("/product/:id", async ({ body, params }, res) => {
  try {
    await Product.findByIdAndUpdate(params.id, {
      $set: body,
    });
    res.status(200).json({ message: "Product got updated" });
  } catch (error) {
    return res.status(400).send(`error ${error}`);
  }
});

module.exports = router;
