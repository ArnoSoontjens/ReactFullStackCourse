const login = require("../routes/auth");
const index = require("../routes/index");

module.exports = app => {
  app.use("/", index);
  app.use("/auth", login);
};
