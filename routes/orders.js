const express = require("express");
const router = express.Router();

// GET ALL ORDERS
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "GET Orders",
  });
});

// INSERT A ORDER
router.post("/", (req, res, next) => {

    const order = {
        id_order: req.body.id_order,
        quantity: req.body.quantity
    }

  res.status(201).send({
    message: "Order Created",
    orderCreated: order
  });
});

// GET SPECIFIC ORDER DATA BY USING ID
router.get("/:order_id", (req, res, next) => {
  const id = req.params.order_id;

  res.status(200).send({
    message: "GET specific order data",
    order_id: id,
  });
});

// UPDATE A ORDER
router.patch("/", (req, res, next) => {
  res.status(200).send({
    message: "Order Updated",
  });
});

// DELETE A ORDER
router.delete("/", (req, res, next) => {
  res.status(200).send({
    message: "Order Deleted",
  });
});

module.exports = router;
