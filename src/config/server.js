const express = require("express");
const morgan = require("morgan");
const cronTask = require("../services/cron.service");
const routes = require("../routes/index.routes");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(routes);

cronTask.start();

module.exports = server;
