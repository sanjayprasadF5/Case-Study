const viewcarController = require("../controllers/viewcarController");
const requireAuth = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.get("/viewcar", viewcarController.get_cars);

module.exports = router;
