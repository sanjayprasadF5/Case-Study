const express = require("express");
const admincontroller = require("../controllers/admincontroller");
const router = express.Router();

router.get("/signup", admincontroller.getsignup);

router.post("/signup", admincontroller.postsignup);

router.get("/login", admincontroller.getlogin);

router.post("/login", admincontroller.postlogin);

router.get("/logout", admincontroller.getlogout);
module.exports = router;
