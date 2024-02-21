const express = require("express");
const router = express.Router();

// GET ALL ORDERS
router.get("/", (req, res, next) => {
  res.status(200).send({
    mesage: "GET Orders",
  });
});

// INSERT A ORDER
router.post("/", (req, res, next) => {
  res.status(201).send({
    mesage: "Order Created",
  });
});

// GET SPECIFIC ORDER DATA BY USING ID
router.get("/:order_id", (req, res, next) => {
  const id = req.params.order_id;

  res.status(200).send({
    mesage: "GET specific order data",
    order_id: id,
  });
});

// UPDATE A ORDER
router.patch("/", (req, res, next) => {
  res.status(200).send({
    mesage: "Order Updated",
  });
});

// DELETE A ORDER
router.delete("/", (req, res, next) => {
  res.status(200).send({
    mesage: "Order Deleted",
  });
});

module.exports = router;
