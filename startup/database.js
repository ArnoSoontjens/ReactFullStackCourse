const mongoose = require("mongoose");
const config = require("config");

require("../models/User");

mongoose.connect(
  config.get("Database.host"),
  { useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log("Connected to mongodb database!");
  }
);
