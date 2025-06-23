const express = require("express");
const { getUsers, deleteUser } = require("../controllers/adminController");
const { verifyAdmin } = require("../service/verifyAdmin");
const router = express.Router();

router.get("/get-users", verifyAdmin, getUsers);
router.delete("/delete-user/:id", verifyAdmin, deleteUser);

module.exports = router;
