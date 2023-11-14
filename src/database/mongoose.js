const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/teddy_challenge_development");

module.exports = mongoose;
