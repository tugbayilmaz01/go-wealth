const crypto = require("crypto-js");
const { pool } = require("../utils/database");

const User = function (user) {
  this.email = user.email;
  this.name = user.name;
  this.surname = user.surname;
  this.password = user.password;
};

User.create = async (newUser) => {
  const user_id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const user = { ...newUser, user_id };
  try {
    await pool.query("INSERT INTO user SET ?", user);
    return { user_id, ...newUser, password: undefined };
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

User.findByEmail = async (email) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    if (rows.length) {
      return rows[0];
    }
    return { kind: "not_found" };
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

/* User.findByUsername = async (username) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM user WHERE username = ?", [
      username,
    ]);
    if (rows.length) {
      console.log("found the user: ", rows[0]);
      return rows[0];
    }
    return { kind: "not_found" };
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
}; */

User.findById = async (user_id) => {
  const idBuffer = Buffer.alloc(18, user_id, "utf-8");

  try {
    const [rows] = await pool.execute("SELECT * FROM user WHERE user_id = ?", [
      idBuffer,
    ]);

    if (rows.length) {
      const user = {
        ...rows[0],
        user_id: rows[0].user_id.toString("utf-8"),
      };

      delete user.password;

      return user;
    }
    throw { kind: "not_found" };
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

User.getAll = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM user");

    if (rows.length) {
      const data = rows.map((user) => {
        user.user_id = user.user_id.toString("utf8");
        user.password = undefined;
        return user;
      });
      const count = rows.length;
      return { count, ...data };
    }
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

User.updateById = async (user_id, user) => {
  const idBuffer = Buffer.alloc(18, user_id, "utf-8");

  try {
    const [rows] = await pool.execute(
      "UPDATE user SET name = ?,WHERE user_id = ?",
      [user.name, idBuffer]
    );

    if (rows.affectedRows == 0) {
      throw { kind: "not_found" };
    }

    return { user_id, ...user };
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

User.delete = async (user_id) => {
  const idBuffer = Buffer.alloc(18, user_id, "utf-8");

  try {
    const [rows] = await pool.query("DELETE FROM user WHERE user_id = ?", [
      idBuffer,
    ]);
    if (rows.affectedRows == 0) {
      throw { kind: "not_found" };
    }

    console.log("deleted user with id: ", user_id);
    return rows;
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
};

module.exports = User;
