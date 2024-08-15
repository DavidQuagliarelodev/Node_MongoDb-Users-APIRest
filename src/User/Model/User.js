const mongoose = require("mongoose");
const User = mongoose.model("user", {
    name: String,
    age: Number,
    email: String,
  });

  module.exports = User;