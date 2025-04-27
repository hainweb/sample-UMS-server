const User = require("../models/User");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const respons = await User.find();
      console.log(respons);
      res.json(respons);
    } catch (error) {
      res.json({ message: "Internal server error" });
    }
  },
};
