const express = require("express");
const router = express.Router();

router.get("/cars", requireAuth, carcontroller.getcar);

module.exports = router;
