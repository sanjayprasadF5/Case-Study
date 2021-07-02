const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const promocodecontroller = require("../controllers/promocodecontroller");
const adminAuth = require("../middlewares/adminmiddleware");
//Swagger
const swaggerUi = require("swagger-ui-express");

// //Promocode
// swaggerDocument4 = require("../swaggerfile/promoswagger.json");
// router.use(
//   "/api-promocode",
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerDocument4)
// );

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
