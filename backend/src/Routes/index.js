const { Router } = require("express");
const Users = require("../Controllers/userController");
const Posts = require("../Controllers/postController");
// const Company = require("../Controllers/companyController");

const routes = Router();

routes.get("/", (req, res) => {
  res.send({ message: "Welcome to Home" });
});

routes.get("/users", Users.index);
routes.get("/users/:id", Users.show);

routes.get("/posts", Posts.index);
routes.get("/posts/:id", Posts.show);

// routes.get("/companies", Company.index);
// routes.get("/companies/:id", Company.show);

module.exports = routes;
