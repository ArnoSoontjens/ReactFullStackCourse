const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  googleId: {
    type: String,
    unique: true
  }
});

mongoose.model("users", UserSchema);
