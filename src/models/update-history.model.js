const mongoose = require("../database/mongoose");

const updateHistorySchema = new mongoose.Schema({
  lastProcessedDate: { type: Date, required: true },
  status: { type: String, enum: ["FINISHED", "IN_PROGRESS"], required: true },
});

const UpdateHistory = mongoose.model("UpdateHistory", updateHistorySchema);

module.exports = UpdateHistory;
