const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const choreRoutes = require("./chore");

router.use("/user", userRoutes);
router.use("/chore", choreRoutes);

module.exports = router;