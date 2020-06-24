const { Router } = require("express");

const routes = Router();

routes.get("/", (req, res) => {
  res.send({ message: "This is various Posts" });
});

module.exports = routes;
