const viewServiceController = require("../controllers/viewserviceController");
const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.get("/viewservice", viewServiceController.get_service);

// router.get("/viewaddon", viewServiceController.get_addon);

module.exports = router;
