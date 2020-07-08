const { Router } = require("express");
const Users = require("../Controllers/userController");
const Posts = require("../Controllers/postController");
const Logon = require("../Controllers/logonController");

const routes = Router();

routes.get("/", Logon.index);

routes.get("/users", Users.index);
routes.get("/users/:id", Users.show);

routes.get("/posts", Posts.index);
routes.get("/posts/:id", Posts.show);

module.exports = routes;
