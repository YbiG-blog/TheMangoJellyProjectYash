const express = require("express");
const router = new express.Router();
const Product = require("../models/product");

// get Products
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
    const user = await Product.findByIdAndDelete(params.id);
    if (!user) {
      res.status(400).json({
        message: "This product id doesn't exist",
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
