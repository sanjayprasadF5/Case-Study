const bodyParser = require("body-parser");
const profileController = require("../controllers/profileController");

const express = require("express");
const router = express.Router();

const requireAuth = require("../middlewares/authMiddleware");

//Get profile page
router.get("/profile", requireAuth, profileController.get_profile);

router.post("/profile", requireAuth, profileController.post_profile);

router.get("/profile", requireAuth, profileController.get_specific_profile);

router.put("/profile", requireAuth, profileController.update_profile);

module.exports = router;
