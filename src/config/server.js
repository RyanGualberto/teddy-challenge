const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));

module.exports = server;
