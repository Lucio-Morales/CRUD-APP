const { Router } = require("express");
const { cartControllers } = require("../controllers");

const cartRoutes = Router();

cartRoutes
  .get("/", cartControllers.getUserCart)
  .get("/products/:cartId", cartControllers.getProductsCart)
  .get("/add", cartControllers.addProductToCart)
  .get("/remove", cartControllers.removeProduct);

module.exports = cartRoutes;
