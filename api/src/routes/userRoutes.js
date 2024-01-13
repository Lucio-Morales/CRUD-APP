const { Router } = require("express");
const { userControllers } = require("../controllers");

const userRoutes = Router();

userRoutes.post("/create", userControllers.postUser);
module.exports = userRoutes;
