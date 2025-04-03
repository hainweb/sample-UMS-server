const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const url = process.env.MONGO_URI;

    const response = await mongoose.connect(url);
    console.log("Mongoose connected", response.connection.host);
  } catch (error) {
    console.log("Mongoose connection error", error);
  }
};

module.exports = {connectDb};
