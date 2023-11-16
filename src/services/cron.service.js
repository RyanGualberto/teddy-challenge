const { loadProducts } = require("./load-products.service");
const cron = require("node-cron");
const cronTask = cron.schedule("13 10 * * *", async () => {
  await loadProducts();
});

module.exports = cronTask;
