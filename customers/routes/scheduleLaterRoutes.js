const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

const controller = require("../controllers/scheduleLaterController");

router.get("/scheduledLater", requireAuth, controller.get_scheduled_orders);

module.exports = router;
