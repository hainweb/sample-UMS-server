const express = require("express");
const { connectDb } = require("./config/db");
const logger = require("morgan");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoute");
const session = require("express-session");
const userRouter = require("./routes/userRoute");
const cors = require("cors");
const adminRouter = require("./routes/adminRoute");

const app = express();
dotenv.config();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRECT,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

connectDb();

app.use("/api/auth", authRouter);
app.use("/api/", userRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server is runing on PORT ${PORT}`);
});
