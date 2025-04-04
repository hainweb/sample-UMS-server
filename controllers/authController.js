const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  signup: async (req, res) => {
    try {
      let { name, age, email, password, createdAt } = req.body;

      const userExist = await User.findOne({ email: email });

      if (userExist) {
        console.log("user exist", userExist);
        return res.json({
          success: false,
          message: "This email is already used.",
        });
      }

      password = await bcrypt.hash(password, 10);
      createdAt = new Date();
      console.log("bc pass", password);

      const response = await User.insertOne({
        name,
        age,
        email,
        password,
        createdAt,
      });
      console.log("response", response);

      res.status(200).json({ success: true, userId: response._id });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Internal server error" });
    }
  },
  doLogin: async (req, res) => {
    try {
      let { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
          console.log("pss matched");

          return res.status(200).json({ success: true });
        } else {
          console.log("Pasword incorrect", isPasswordMatch);

          return res.json({ status: false, message: "Incorrect Password" });
        }
      } else {
        console.log("user not found");

        return res.json({ success: false, message: "User not found" });
      }
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: "Internal server error" });
    }
  },
};
