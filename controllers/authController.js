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
  
};
