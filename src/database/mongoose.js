const mongoose = require("mongoose");

const databaseUrl = process.env.DATABASE_URL;
console.log("Connecting to database... ", databaseUrl);
mongoose.connect(databaseUrl);

module.exports = mongoose;
