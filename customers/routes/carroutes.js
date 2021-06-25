const carController = require("../controllers/carController");
const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.get("/car", carController.get_cars);

module.exports = router;
