const bodyParser = require("body-parser");
const profileController = require("../controllers/profileController");

const express = require("express");
const router = express.Router();

// const requireAuth = require("../middlewares/authMiddleware");

//Get profile page
router.get("/profile", profileController.get_profile);

router.post("/profile", profileController.post_profile);

router.get("/profile", profileController.get_specific_profile);

router.put("/profile", profileController.update_profile);

module.exports = router;
