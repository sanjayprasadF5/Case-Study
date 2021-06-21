const express = require("express");
const addoncontroller = require("../controllers/addoncontroller");
const router = express.Router();

router.post("/addon", addoncontroller);

router.get("/addon", addoncontroller);

router.get("/addon/:id", addoncontroller.);

router.put("/addon/:id", addoncontroller.getlogin);

router.delete("/addon/:id", addoncontroller.postlogin);

module.exports = router;
