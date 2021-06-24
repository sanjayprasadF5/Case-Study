const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const promocodecontroller = require("../controllers/promocodecontroller");

//Create promo code
router.post("/promocode", promocodecontroller.postpromocode);

//Get all promocode
router.get("/promocode", promocodecontroller.getpromocode);

//Get promocode by id
router.get("/promocode/:id", promocodecontroller.getpromocodeId);

//Update the promocode
router.put("/promocode/:id", promocodecontroller.updatepromocode);

//Delete any promocode
router.delete("/promocode/:id", promocodecontroller.deletepromocode);

module.exports = router;
