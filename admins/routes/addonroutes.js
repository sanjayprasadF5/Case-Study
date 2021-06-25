const express = require("express");
const router = express.Router();

const addoncontroller = require("../controllers/addoncontroller");
const bodyParser = require("body-parser");

// const adminAuth = require("../middlewares/adminmiddleware");

router.post("/addon", addoncontroller.postaddon);

router.get("/addon", addoncontroller.getaddon);

router.get("/addon/:id", addoncontroller.getidaddon);

router.put("/addon/:id", addoncontroller.putaddon);

router.delete("/addon/:id", addoncontroller.deleteaddon);

module.exports = router;
