const login = require("../routes/auth");

module.exports = app => {
  app.use("/auth", login);

  return app;
};
