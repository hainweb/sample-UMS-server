const express = require("express");
const { getUserProfile, editUserProfile } = require("../controllers/userController");
const router = express.Router();

router.get("/profile", getUserProfile);
router.put('/edit-profile', editUserProfile)

module.exports = router;
