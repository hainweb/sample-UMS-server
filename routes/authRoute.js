const express = require("express");
const {
  signup,
  doLogin,
  getSession,
  adminLogin,
} = require("../controllers/authController");
const router = express.Router();

// router.post('/login')

router.post("/session", getSession);

router.post("/signup", signup);
router.post("/login", doLogin);

router.post("/admin-login", adminLogin);

module.exports = router;
