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
  deleteUser: async (req, res) => {
    try {
      let { id } = req.params;
      const response = await User.findByIdAndDelete(id);
      console.log(response);
      res.json({ success: true });
    } catch (error) {
      res.json("Internal server error");
    }
  },
};
