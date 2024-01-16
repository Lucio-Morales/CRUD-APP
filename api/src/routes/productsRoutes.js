const { Router } = require("express");
const { productControllers } = require("../controllers");

const productsRoutes = Router();

productsRoutes
  .post("/create", productControllers.postProduct)
  .get("/store/:storeId", productControllers.getAllInStore);

module.exports = productsRoutes;
