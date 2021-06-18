const express = require("express");
const router = express.Router();
//const Car = require("../models/carmodel");
const carcontroller = require("../controllers/carcontroller");
//Routes for car

//POST routes to create new car
router.post("/car", (req, res) => {});

//All car
router.get("/car", carcontroller.getCar);

//Get car by id
router.get("/car/:id", carcontroller.getCarID);

//update Car
router.put("/car/:id", carcontroller.updateCar);

//Delete car
router.delete("/car/:id", carcontroller.deleteCar);

module.exports = router;
