const express = require("express");
const router = new express.Router();
const Product = require("../models/product");

// products by filter

// filter by brandName
router.get("/product/brand/:id", async ({ params }, res) => {
  try {
    const product = await Product.find(
      {
        brandName: params.id
      },
      {
        _id: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      }
    );
    if (product.length == 0) {
      res.status(404).json({
        message: "This brand have no product",
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

// filter by category
router.get("/product/category/:id", async ({ params }, res) => {
    try {
      const product = await Product.find(
        {
            productCategory: params.id
        },
        {
          _id: 0,
          createdAt: 0,
          updatedAt: 0,
          __v: 0,
        }
      );
      if (product.length == 0) {
        res.status(404).json({
          message: "This brand have no product",
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

module.exports = router;
