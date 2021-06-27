const bodyParser = require("body-parser");
const profileController = require("../controllers/customerdetailsController");

const express = require("express");
const router = express.Router();

// const requireAuth = require("../middlewares/authMiddleware");

//Get profile page
router.get("/customer", profileController.get_customer);

router.post("/customer", profileController.post_customer);

router.get("/customer/:id", profileController.get_specific_customer);

router.put("/customer/:id", profileController.update_customer);

router.delete("/customer/:id", profileController.delete_customer);
module.exports = router;
