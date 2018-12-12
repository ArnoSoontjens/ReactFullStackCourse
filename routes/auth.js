const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  console.log("Done");
});

router.get("/logout", (req, res) => {
  //Automatically added by passport
  req.logout();
  res.send(req.user);
});

module.exports = router;
