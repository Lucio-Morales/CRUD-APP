const { Router } = require("express");
const productsRoutes = require("./productsRoutes");
const cartRoutes = require("./cartRoutes");
const userRoutes = require("./userRoutes");

const mainRouter = Router();

mainRouter
  .use("/product", productsRoutes)
  .use("/cart", cartRoutes)
  .use("/user", userRoutes);

module.exports = mainRouter;
