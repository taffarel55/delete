const express = require("express");
const users = require("../controllers/users");
const cards = require("../controllers/cards");

const routes = express();

routes.get("/", users.main);

routes.post("/cards", cards.create);
routes.get("/cards/:id", cards.read);
routes.patch("/cards/:id", cards.update);
routes.delete("/cards/:id", cards.del);

module.exports = routes;
