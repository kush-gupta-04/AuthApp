const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/Auth");

router.post("/signup", signup);
// router.post("/login", login);

module.exports = router;
