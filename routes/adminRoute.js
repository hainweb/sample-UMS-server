const express = require("express");
const { getUsers } = require("../controllers/adminController");
const { verifyAdmin } = require("../service/verifyAdmin");
const router = express.Router();

router.get("/get-users", verifyAdmin, getUsers);

module.exports = router;
