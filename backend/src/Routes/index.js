const { Router } = require("express");
const Users = require("./userRoute");
const Posts = require("./postRoute");

const routes = Router();

routes.get("/", (req, res) => {
  res.send({ message: "Welcome to Home" });
});

routes.get("/users", Users);

routes.get("/posts", Posts);

module.exports = routes;
