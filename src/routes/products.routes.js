const { Router } = require("express");
const ProductsController = require("../controllers/products.controller");

const routes = Router();
const controller = new ProductsController();

routes.post("/", controller.create.bind(controller));
routes.get("/", controller.getAll.bind(controller));
routes.get("/:code", controller.getByCode.bind(controller));
routes.put("/:code", controller.update.bind(controller));
routes.delete("/:code", controller.delete.bind(controller));

module.exports = routes;
