const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = 5000;

connectDb()

app.get("/", (req, res) => {
  res.send("Welcome to UMS");
});
app.listen(PORT, () => {
  console.log(`Server is runing on PORT ${PORT}`);
});
