const { Router } = require("express");
const { sellerControllers } = require("../controllers");

const sellerRoutes = Router();

sellerRoutes.post("/create", sellerControllers.postSeller);

module.exports = sellerRoutes;
