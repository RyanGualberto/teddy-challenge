const ProductsModel = require("../models/products.model");

class ProductsRepository {
  constructor() {
    this.model = ProductsModel;
  }

  async create(data) {
    if (await this.getByCode(data.code)) {
      const product = await this.update(data.code, data);
      return product;
    }

    const product = await this.model.create(data);
    return product;
  }

  async getAll() {
    const products = await this.model.find();
    return products;
  }

  async getByCode(code) {
    const product = await this.model.findOne({ code });
    return product;
  }

  async update(code, data) {
    const product = await this.model.findOneAndUpdate({ code }, data);
    return product;
  }

  async delete(code) {
    await this.model.findOneAndDelete({ code });
    return true;
  }
}

module.exports = ProductsRepository;
