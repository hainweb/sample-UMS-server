const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const User = mongoose.model("User", userScheme);
module.exports = User;
