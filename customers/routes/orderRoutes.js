const bodyParser = require("body-parser");
const ordercontroller = require("../controllers/orderController");
const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

//Get the booking page
router.get("/order", requireAuth, ordercontroller.get_order);

router.post("/order", requireAuth, ordercontroller.create_order);

router.put("/order/:id", requireAuth, ordercontroller.cancel_order);

router.put(
  "/orderPayment/:id",
  requireAuth,
  ordercontroller.orderPaymentFulfilled
);

router.put("/washcount", requireAuth, ordercontroller.increaseWashCount);

module.exports = router;
