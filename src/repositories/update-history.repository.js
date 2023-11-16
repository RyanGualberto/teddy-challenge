const UpdateHistoryModel = require("../models/update-history.model");

class UpdateHistoryRepository {
  constructor() {
    this.model = UpdateHistoryModel;
  }

  async getLast() {
    const history = await this.model.findOne();
    return history;
  }

  async getByLastProcesssedDate(lastProcessedDate) {
    const history = await this.model.findOne({ lastProcessedDate });
    return history;
  }

  async create(data) {
    const history = await this.model.create(data);
    return history;
  }

  async update(data) {
    const { id: _id } = await this.getLast();
    const history = await this.model.findOneAndUpdate(
      {
        _id,
      },
      data
    );
    return history;
  }
}

module.exports = UpdateHistoryRepository;
