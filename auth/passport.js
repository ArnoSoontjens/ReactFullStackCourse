const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("config");

module.exports = () => {
  return passport.use(
    new GoogleStrategy(
      {
        clientID: config.get("Auth.Google.clientId"),
        clientSecret: config.get("Auth.Google.clientSecret"),
        callbackURL: "/auth/google/callback"
      },
      (accessToken, refreshToken, profile, done) => {
        console.log("Access token: ", accessToken);
        console.log("Refresh token: ", refreshToken);
        console.log("Profile: ", profile);
        done();
      }
    )
  );
};
