const express = require("express");
const routes = require("../routes");
const { authenticate, error } = require("../middlewares");
const db = require("../database/config");
const mongoose = require("mongoose");

const server = express();

mongoose.connect(db.uri, { useNewUrlParser: true });

server.use(express.json());
server.use(authenticate);
server.use(routes);
server.use(error);

module.exports = server;
