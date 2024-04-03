const express = require("express");
const userRoutes = require("./user.js");
const expenseRoutes = require("./expense.js");

const router = express.Router();

router.use("/users", userRoutes);
router.use("/expenses", expenseRoutes);

module.exports = router;
