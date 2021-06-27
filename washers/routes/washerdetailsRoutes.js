const bodyParser = require("body-parser");
const profileController = require("../controllers/washerdetailsController");
const express = require("express");
const router = express.Router();

// const requireAuth = require("../middlewares/authMiddleware");

//Get profile page
router.get("/washer", profileController.get_washer);

router.post("/washer", profileController.post_washer);

router.get("/washer/:id", profileController.get_specific_washer);

router.put("/washer/:id", profileController.update_washer);

router.delete("/washer/:id", profileController.delete_washer);
module.exports = router;
