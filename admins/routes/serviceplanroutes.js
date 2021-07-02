const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const adminAuth = require("../middlewares/adminmiddleware");
const serviceplancontroller = require("../controllers/serviceplancontroller");

//Swagger API
const swaggerUi = require("swagger-ui-express");

// //ServicePlan
// swaggerDocument2 = require("../swaggerfile/serviceswagger.json");
// router.use("/api-service", swaggerUi.serve, swaggerUi.setup(swaggerDocument2));

//Routes for Service plan

//POST routes to create new service plan
router.post("/serviceplan", serviceplancontroller.postserviceplan);

//Get All Services
router.get("/serviceplan", serviceplancontroller.getserviceplan);

//Get car by id
router.get("/serviceplan/:id", serviceplancontroller.getserviceplanID);

//update Service plan
router.put("/serviceplan/:id", serviceplancontroller.updateserviceplan);

//Delete plan
router.delete("/serviceplan/:id", serviceplancontroller.deleteserviceplan);

module.exports = router;
