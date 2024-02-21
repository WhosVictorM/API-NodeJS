const express = require("express");
const router = express.Router();

// GET ALL PRODUCTS
router.get("/", (req, res, next) => {
  res.status(200).send({
    mesage: "GET Products",
  });
});

// INSERT A PRODUCT
router.post("/", (req, res, next) => {
  res.status(201).send({
    mesage: "Product Created",
  });
});

// GET SPECIFIC PRODUCT DATA BY USING ID
router.get("/:product_id", (req, res, next) => {
  const id = req.params.product_id;

  if (id === "special") {
    res.status(200).send({
      mesage: "You find a Special ID",
      id: id,
    });
  } else {
    res.status(200).send({
      mesage: "You find a Normal ID",
      product_id: id,
    });
  }
});

// UPDATE A PRODUCT
router.patch("/", (req, res, next) => {
  res.status(200).send({
    mesage: "Product Updated",
  });
});

// DELETE A PRODUCT
router.delete("/", (req, res, next) => {
  res.status(200).send({
    mesage: "Product Deleted",
  });
});

module.exports = router;
