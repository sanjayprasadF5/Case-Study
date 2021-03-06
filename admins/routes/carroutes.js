const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");
const adminAuth = require("../middlewares/adminmiddleware");
const carcontroller = require("../controllers/carcontroller");
//Routes for car
// const swaggerUi = require("swagger-ui-express");

// const swaggerDocument = require("../swaggerfile/carswagger.json");
// router.use("/api-car", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get("/car", adminAuth, carcontroller.getCar);

//POST routes to create new car
router.post("/car", carcontroller.postCar);

router.get("/car/:id", carcontroller.getCarID);

//update Car
router.put("/car/:id", carcontroller.updateCar);

//Delete car
router.delete("/car/:id", carcontroller.deleteCar);

module.exports = router;
