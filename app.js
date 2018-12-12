const express = require("express");
const config = require("config");

const app = express();

require("./startup/routes")(app);
require("./auth/passport")();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}!`);
});
