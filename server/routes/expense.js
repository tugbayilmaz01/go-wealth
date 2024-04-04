const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense");

router.route("/").post(expenseController.create).get(expenseController.getAll);

module.exports = router;
