const express = require("express");
const morgan = require("morgan");
const cronTask = require("../services/cron.service");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

cronTask.start();

module.exports = server;
