const { Router } = require("express");
const RootController = require("../controllers/root.controller");

const routes = Router();
const rootController = new RootController();

routes.get("/", async (req, res) => {
  // #swagger.tags = ['Root']
  // #swagger.description = 'Endpoint para obter detalhes da API, status da conexão com o banco de dados, horário da última execução do CRON, tempo online e uso de memória.'
  /* #swagger.responses[200] = { 
                 schema: { $ref: "#/definitions/RootInfo" },
                 description: 'Detalhes da API' 
          } */

  return await rootController.get(req, res);
});

module.exports = routes;
