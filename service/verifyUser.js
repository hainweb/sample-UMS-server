const verifyUser = (req, res, next) => {
  let user = req.session.user;

  if (user) {
    next();
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = { verifyUser };
