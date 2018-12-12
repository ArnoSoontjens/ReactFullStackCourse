const express = require("express");
const config = require("config");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("./startup/database");

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.get("Auth.Keys.cookieKey")]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./startup/routes")(app);
require("./auth/passport");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}!`);
});
