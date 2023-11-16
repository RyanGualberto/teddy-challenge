const UpdateHistoryRepository = require("../repositories/update-history.repository");

class RootController {
  constructor() {
    this.updateHistoryRepository = new UpdateHistoryRepository();
  }

  async get(req, res) {
    const { status, lastProcessedDate } =
      await this.updateHistoryRepository.getLast();
    const uptime = process.uptime();
    const memoryUsage = process.memoryUsage();

    const formattedDate = new Date(lastProcessedDate).toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const formattedUptime = `${Math.floor(uptime / 3600)}h ${Math.floor(
      (uptime % 3600) / 60
    )}m ${Math.floor(uptime % 60)}s`;

    const formattedMemoryUsage = {
      rss: `${(memoryUsage.rss / (1024 * 1024)).toFixed(2)} MB`,
      heapTotal: `${(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2)} MB`,
      heapUsed: `${(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2)} MB`,
    };

    const responseData = {
      status: "OK",
      databaseConnection: "OK",
      cronLastExecuted: formattedDate,
      uptime: formattedUptime,
      memoryUsage: formattedMemoryUsage,
    };

    res.json(responseData);
  }
}

module.exports = RootController;
