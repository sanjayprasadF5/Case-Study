const bodyParser = require("body-parser");
const orderController = require("../controllers/orderwasherController");
const express = require("express");
const router = express.Router();

//  const requireAuth = require("../middlewares/authMiddleware");

//Get profile page
router.get("/orderwasher", orderController.get_order);

router.post("/orderwasher", orderController.post_order);

// router.get("/orderwasher/:id", orderController.get_specific_order);

router.get("/findorder/:city", orderController.order_city);

module.exports = router;
