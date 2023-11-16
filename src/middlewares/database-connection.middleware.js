const mongoose = require("../database/mongoose");

async function databaseConnectionVerification(req, res, next) {
  try {
    const isConnected = mongoose.connection.readyState === 1;

    if (!isConnected) {
      throw new Error("Falha na conexão com o banco de dados");
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  databaseConnectionVerification,
};
