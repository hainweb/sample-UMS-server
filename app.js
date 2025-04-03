const express = require("express");
const { connectDb } = require("./config/db");
const logger = require("morgan");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoute");
const app = express();
dotenv.config();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

connectDb();

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is runing on PORT ${PORT}`);
});
