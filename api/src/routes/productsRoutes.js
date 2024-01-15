const { Router } = require("express");
const { productControllers } = require("../controllers");

const productsRoutes = Router();

productsRoutes.post("/create", productControllers.postProduct);

module.exports = productsRoutes;
