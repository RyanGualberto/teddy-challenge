const cron = require("node-cron");

const cronTask = cron.schedule("*/30 * * * * *", () => {
  console.log("Log a cada 30 segundos");
});

module.exports = cronTask;
