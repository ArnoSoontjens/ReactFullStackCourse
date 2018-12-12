const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("config");
const mongoose = require("mongoose");

const Users = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findById(id);
    if (user) {
      done(null, user);
    }
  } catch (ex) {
    console.error(ex);
    done(ex, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.get("Auth.Google.clientId"),
      clientSecret: config.get("Auth.Google.clientSecret"),
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await Users.findOne({ googleId: profile.id });
        if (!user) {
          user = await new Users({ googleId: profile.id }).save();
        }
        done(null, user);
      } catch (ex) {
        done(ex, null);
      }
    }
  )
);
