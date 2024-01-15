const { Router } = require("express");
const productsRoutes = require("./productsRoutes");
const cartRoutes = require("./cartRoutes");
const buyerRoutes = require("./buyerRoutes");
const sellerRoutes = require("./sellerRoutes");
const storeRoutes = require("./storeRoutes");

const mainRouter = Router();

mainRouter
  .use("/product", productsRoutes)
  .use("/cart", cartRoutes)
  .use("/buyer", buyerRoutes)
  .use("/seller", sellerRoutes)
  .use("/store", storeRoutes);

module.exports = mainRouter;
