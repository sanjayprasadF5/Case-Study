const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");

const authController = require("../controllers/authController");
const requireAuth = require("../middlewares/authMiddleware");

//Creating JWT Token for google auth
const maxAge = 2 * 24 * 60 * 60; //token will expire in 2 days
const createToken = (id) => {
  return jwt.sign({ id }, "A strong secret token", {
    expiresIn: maxAge,
  });
};

//Routes for signup
router.get("/signup", requireAuth, authController.get_signup);

router.post("/signup", requireAuth, authController.post_signup);

//Routes for login
router.get("/login", requireAuth, authController.get_login);

router.post("/login", requireAuth, authController.post_login);

//Route for logout
router.get("/logout", requireAuth, authController.get_logout);

module.exports = router;
