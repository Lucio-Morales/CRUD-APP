const { Router } = require("express");
const { productControllers } = require("../controllers");

const productsRoutes = Router();

productsRoutes
  .post("/create", productControllers.postProduct)
  .get("/all", productControllers.getAllProducts)
  .get("/store/:storeId", productControllers.getAllInStore);

module.exports = productsRoutes;
