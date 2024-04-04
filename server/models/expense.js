const crypto = require("crypto-js");
const { pool } = require("../utils/database");

const Expense = function (expense) {
  this.name = expense.name;
  (this.price = expense.price), (this.effort = expense.effort);
};

Expense.create = async (newExpense) => {
  const expense_id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const expense = { ...newExpense, expense_id };
  try {
    await pool.query("INSERT INTO expense SET ?", expense);
    return { expense_id, ...newExpense };
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

Expense.getAll = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM expense");
    if (rows.length) {
      const data = rows.map((expense) => {
        expense.expense_id = expense.expense_id;
        return expense;
      });
      return data;
    }
  } catch (err) {
    console.log("error: ", err);
  }
  throw err;
};

module.exports = Expense;
