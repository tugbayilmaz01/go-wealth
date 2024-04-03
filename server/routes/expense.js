const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense");

router.post("/", expenseController.create);

module.exports = router;
