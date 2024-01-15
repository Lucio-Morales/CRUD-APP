const { Router } = require("express");
const { buyerControllers } = require("../controllers");

const buyerRoutes = Router();

buyerRoutes.post("/create", buyerControllers.postBuyer);
module.exports = buyerRoutes;
