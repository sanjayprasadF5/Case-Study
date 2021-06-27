const promoController = require("../controllers/viewpromoController");
const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.get("/viewpromo", promoController.get_promocode);

module.exports = router;
