const express = require("express");
const addoncontroller = require("../controllers/addoncontroller");
const router = express.Router();

router.post("/addon", addoncontroller.postaddon);

router.get("/addon", addoncontroller.getaddon);

router.get("/addon/:id", addoncontroller.getidaddon);

router.put("/addon/:id", addoncontroller.putaddon);

router.delete("/addon/:id", addoncontroller.deleteaddon);

module.exports = router;
