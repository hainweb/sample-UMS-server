const User = require("../models/User");

module.exports = {
  getUserProfile: async (req, res) => {
    try {
      if (!req.session.user) {
        return res.json({ success: false, message: "Invalid credantials" });
      }
      const userId = req.session.user._id;
      console.log("user ", userId, req.session);

      const response = await User.findById(userId);
      console.log(response);
      const user = {
        name: response.name,
        age: response.age,
        email: response.email,
        role: response.role,
        createdAt: response.createdAt,
      };
      res.json(user);
    } catch (error) {
      res.json({ message: "Internal server error" });
      console.log(error);
    }
  },
  editUserProfile: async (req, res) => {
    try {
      let { name, age } = req.body;
      console.log(name, age);
      let userId = req.session.user._id;

      const response = await User.findByIdAndUpdate(userId, {
        name,
        age,
      });
      console.log(response);
      res.json({ success: true });
    } catch (error) {
      res.json({ message: "Internal server error" });
    }
  },
  getUser: (req, res) => {
    let user = req.session.user;
    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: "Unauthorized" });
    }
  },
};
