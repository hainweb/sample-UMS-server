const express = require("express");
const {
  signup,
  doLogin,
  doLogout,
  getSession,
  adminLogin,
} = require("../controllers/authController");
const router = express.Router();

router.post("/session", getSession);

router.post("/signup", signup);
router.post("/login", doLogin);
router.post("/logout", doLogout);

router.post("/admin-login", adminLogin);

module.exports = router;
