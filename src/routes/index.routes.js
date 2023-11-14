const { Router } = require("express");

const productsRoutes = require("./products.routes");
const rootRoutes = require("./root.routes");

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/", rootRoutes);

module.exports = routes;
