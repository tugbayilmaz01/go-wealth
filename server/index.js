const express = require("express");
const app = express();
const port = 5000;
const { pool } = require("./utils/database");
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to the MySQL database pool!");
    connection.release();
  } catch (err) {
    console.error("Error connecting to the database pool", err);
    process.exit(1);
  }

  app.listen(port, () => {
    console.log("Server is up on port " + port);
  });
})();
