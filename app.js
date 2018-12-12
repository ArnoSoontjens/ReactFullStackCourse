const express = require("express");
const config = require("config");

const app = express();

require("./auth/passport")();

const login = require("./routes/auth");

app.use("/auth", login);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Sever started on port ${PORT}!`);
});
