const express = require("express");
const router = express.Router();

//Routes for car
router.get("/car", (req, res) => {
  res.send("This is a car");
});

router.get("/car/:id", (req, res) => {
  var car = req.params.id;
  res.send(car);
});

router.post("/car", (req, res) => {
  var newCar = {
    name: req.body.name,
    carBrand: req.body.carBrand,
  };

  var car = new Car(newCar);
  car
    .save()
    .then(() => {
      console.log("stored succefully");
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.put("/car/:id", (req, res) => {
  res.send("Updated Car");
});

router.delete("/car/:id", (req, res) => {
  res.send("Deleted Car");
});

module.exports = router;
