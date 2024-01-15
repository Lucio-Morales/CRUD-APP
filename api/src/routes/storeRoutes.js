const { Router } = require("express");
const { storeControllers } = require("../controllers");

const storeRoutes = Router();

storeRoutes.post("/create", storeControllers.postStore);

module.exports = storeRoutes;
