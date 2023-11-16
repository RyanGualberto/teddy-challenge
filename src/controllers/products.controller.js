const ProductsRepository = require("../repositories/products.repository");

class ProductsController {
  constructor() {
    this.repository = new ProductsRepository();
  }

  async create(req, res) {
    const data = req.body;
    const product = await this.repository.create(data);
    return res.status(201).json(product);
  }

  async getAll(req, res) {
    const { page = 1, limit = 25 } = req.query;
    const products = await this.repository.getAll(page, limit);
    return res.status(200).json(products);
  }

  async getByCode(req, res) {
    const { code } = req.params;
    const product = await this.repository.getByCode(code);
    return res.status(200).json(product);
  }

  async update(req, res) {
    const { code } = req.params;
    const data = req.body;
    const product = await this.repository.update(code, data);
    return res.status(200).json(product);
  }

  async delete(req, res) {
    const { code } = req.params;
    await this.repository.delete(code);
    return res.status(204).end();
  }
}

module.exports = ProductsController;
