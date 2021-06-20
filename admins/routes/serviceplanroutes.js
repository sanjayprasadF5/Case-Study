const express = require("express");
const router = express.Router();
const ServicePlan = require("../models/serviceplanmodel");
const serviceplancontroller = require("../controllers/serviceplancontroller");
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