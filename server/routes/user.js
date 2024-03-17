const express = require("express");
const users = require("../controllers/user.js");
const auth = require("../middleware/auth");

const router = express.Router();

router.route("/register").get(auth, users.getAll).post(users.create);
router.post("/login", users.login);
/* router.route("/").get(auth, users.getAll).post(users.create);
router
  .route("/user-by-id/:id")
  .get(auth, users.findById)
  .put(auth, users.updateById);
router
  .route("/me")
  .get(auth, users.getLoggedUser)
  .delete(auth, users.deleteLoggedUser);
 */
module.exports = router;
