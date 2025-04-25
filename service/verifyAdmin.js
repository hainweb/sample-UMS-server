const verifyAdmin = (req, res, next) => {
  let admin = req.session.admin;
  if (admin) {
    next();
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = { verifyAdmin };
