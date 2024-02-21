const express = require("express");
const app = express();

const productsRoute = require("./routes/products");
const ordersRoute = require("./routes/orders")

app.use("/products", productsRoute);
app.use("/orders", ordersRoute)

app.use("/test", (req, res, next) => {
  res.status(200).send({
    mesage: "OK",
  });
});

module.exports = app;
