const { Router } = require("express");
const RootController = require("../controllers/root.controller");

const routes = Router();
const rootController = new RootController();

routes.get("/", rootController.get.bind(rootController));

module.exports = routes;
