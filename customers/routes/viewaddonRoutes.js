const viewaddonController = require("../controllers/viewaddonController");
const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.get("/viewaddons", viewaddonController.get_addon);

module.exports = router;
