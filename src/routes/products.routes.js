const { Router } = require("express");
const ProductsController = require("../controllers/products.controller");

const routes = Router();
const controller = new ProductsController();

routes.get("/", async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para obter todos os produtos.'
  // #swagger.parameters['page'] = { description: 'Número da página', type: 'integer' }
  // #swagger.parameters['limit'] = { description: 'Limite de itens por página', type: 'integer' }
  /* #swagger.responses[200] = { 
                     schema: { $ref: "#/definitions/Product" },
                     description: 'Produtos' 
            } */

  return await controller.getAll(req, res);
});

routes.get("/:code", async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para obter um produto específico.'
  /* #swagger.responses[200] = { 
                         schema: { $ref: "#/definitions/Product" },
                         description: 'Produto' 
                } */

  return await controller.getByCode(req, res);
});

routes.put("/:code", async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para atualizar um produto específico.'
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Dados do produto',
        required: true,
        schema: {
          $ref: "#/definitions/Product"
        }
      } */
  /* #swagger.responses[200] = { 
                             schema: { $ref: "#/definitions/Product" },
                             description: 'Produto' 
                    } */

  return await controller.update(req, res);
});
routes.delete("/:code", async (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para remover um produto específico.'
  /* #swagger.responses[204] = { 
                                 description: 'Produto' 
                        } */

  return await controller.delete(req, res);
});

module.exports = routes;
