const express = require("express");
const app = express();
const morgan = require("morgan");

const productsRoute = require("./routes/products");
const ordersRoute = require("./routes/orders");

app.use(morgan("dev"));

app.use("/products", productsRoute);
app.use("/orders", ordersRoute);

// ROUTE DIDN'T FOUND
app.use((req, res, next) => {
  const err = new Error("Not Found.");
  err.status = 404;
  next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error:{
            message: error.message
        }
    })
})

module.exports = app;
