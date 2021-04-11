const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const userRoutes = require("./chore");

router.use("/user", userRoutes);
router.use("/chore", choreRoutes);

module.exports = router;