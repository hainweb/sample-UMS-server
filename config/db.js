const mongoose = require("mongoose");

const connectDb = async () => {
  const url = process.env.MONGO_URI;

  const response = await mongoose.connect(url);
  
};

module.exports = connectDb;
