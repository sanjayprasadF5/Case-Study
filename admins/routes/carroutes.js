const express = require("express");
const router = express.Router();
//const Car = require("../models/carmodel");--- node need here as well
const carcontroller = require("../controllers/carcontroller");
//Routes for car

//POST routes to create new car
router.post("/car", carcontroller.postCar);

// /**
//  * @swagger
//  * /car:
//  *      get:
//  *          summary: Returns all the car.
//  *          responses:
//  *              200:
//  *                  description: The list of the car.
//  *                  content:
//  *                      application/json:
//  *                          schema:
//  *                              type: array
//  *                              required: true
//  *                              properties:
//  *                                         name:
//  *                                              type:string
//  *                                         carBrand:
//  *                                              type:string
//  *                                         status:
//  *                                              type:string
//  *
//  */

/**
 * @openapi
 * /car:
 *  get:
 *    description: Get all cars
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */

router.get("/car", carcontroller.getCar);

//Get car by id
/**
 * @openapi
 * /car/:id :
 *  get:
 *    description: Get a specific car by id
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.get("/car/:id", carcontroller.getCarID);

//update Car
router.put("/car/:id", carcontroller.updateCar);

//Delete car
router.delete("/car/:id", carcontroller.deleteCar);

module.exports = router;
