const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");

const carcontroller = require("../controllers/carcontroller");
//Routes for car

// /**
//  * @swagger
//  * /car:
//  *  get:
//  *    description: Get all cars
//  *    responses:
//  *      '201':
//  *        description: A successful response
//  *      '400' :
//  *        description: Error occured
//  */
/**
 * @swagger
 * "/car": {
    "get": {
      "tags": ["car"],
      "summary": "Get all users in system",
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/Users"
 */

router.get("/car", carcontroller.getCar);

//POST routes to create new car
router.post("/car", carcontroller.postCar);

router.get("/car/:id", carcontroller.getCarID);

//update Car
router.put("/car/:id", carcontroller.updateCar);

//Delete car
router.delete("/car/:id", carcontroller.deleteCar);

module.exports = router;
