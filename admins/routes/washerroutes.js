const express = require("express");
const router = express.Router();
const washercontroller = require("../controllers/washercontroller");

//routes for washer

//Get routes
router.get("/washer", washercontroller.getallwasher);

//get routes _id
router.get("/washer/:id", washercontroller.getwasherID);

//put routes routes
router.put("/washer/:id", washercontroller.updatewasher);

//delete routes routes
router.delete("/washer/:id", washercontroller.deletewasher);

//post routes routes
router.post("/washer/:id", washercontroller.postwasher);

module.exports = router;
