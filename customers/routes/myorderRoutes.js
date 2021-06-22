const express = require("express");
const router = express.Router();

const orderController = require("../controllers/myorderController");
const requireAuth = require("../middlewares/authMiddleware");

router.get("/accepted", requireAuth, orderController.get_accepted_orders);

router.get("/pending", requireAuth, orderController.get_pending_orders);

router.get("/inprocess", requireAuth, orderController.get_inprocess_orders);

router.get(
  "/completedAndPaid",
  requireAuth,
  orderController.get_completed_paid_orders
);

router.get(
  "/completedAndUnpaid",
  requireAuth,
  orderController.get_completed_unpaid_orders
);

router.get("/cancelled", requireAuth, orderController.get_cancelled_orders);

module.exports = router;
