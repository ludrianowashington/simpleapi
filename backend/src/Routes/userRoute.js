const { Router } = require("express");
const User = require("../Controllers/userController");

const routes = Router();

routes.get("/", User.index);

module.exports = routes;
