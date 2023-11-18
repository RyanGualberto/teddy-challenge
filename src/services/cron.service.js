const { loadProducts } = require("./load-products.service");
const cron = require("node-cron");
const cronTask = cron.schedule("10 09 * * *", async () => {
  await loadProducts();
});

module.exports = cronTask;
