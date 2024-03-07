const express = require("express");
const cors = require("cors");
const { pool } = require("./utils/database");
const app = express();
const port = 5000;
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(routes);

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
