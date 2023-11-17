require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

const cronTask = require("../services/cron.service");
const routes = require("../routes/index.routes");

const {
  databaseConnectionVerification,
} = require("../middlewares/database-connection.middleware");
const { startTimeMiddleware } = require("../middlewares/uptime.middleware");

const swaggerFile = require("./swagger_output.json");

const server = express();

server.use(startTimeMiddleware);
server.use(databaseConnectionVerification);

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(routes);

cronTask.start();

module.exports = server;
