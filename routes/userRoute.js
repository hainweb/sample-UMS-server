const express = require("express");
const {
  getUserProfile,
  editUserProfile,
  getUser,
} = require("../controllers/userController");
const { verifyUser } = require("../service/verifyUser");
const router = express.Router();

router.get("/me", verifyUser, getUser);

router.get("/profile", verifyUser, getUserProfile);
router.put("/edit-profile", verifyUser, editUserProfile);

module.exports = router;
