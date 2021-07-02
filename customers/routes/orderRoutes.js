const bodyParser = require("body-parser");
const orderController = require("../controllers/orderController");

const express = require("express");
const router = express.Router();

// const requireAuth = require("../middlewares/authMiddleware");

//Get profile page
router.get("/order", orderController.get_order);

router.post("/order", orderController.post_order);

router.get("/order/:id", orderController.get_specific_order);

router.put("/order/:id", orderController.update_order);

router.delete("/order/:id", orderController.delete_order);

router.get("/orderresponse/:status", orderController.get_response_status);
// router.get("/searchwasher/:name", profileController.get_washer_name);
module.exports = router;
