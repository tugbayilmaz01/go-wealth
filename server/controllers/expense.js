const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Expense = require("../models/expense.js");

exports.create = async (req, res) => {
  try {
    const expense = new Expense({
      name: req.body.name,
      price: req.body.price,
      effort: req.body.effort,
    });

    const newExpense = await Expense.create(expense);
    res.send(newExpense);
  } catch (error) {
    console.error("Error creating expense:", error);
  }
  res.status(500).json({ error: "Internal Server Error" });
};
