const express = require("express");
const router = express.Router();
const Car = require("../models/carmodel");

//Routes for car

//POST routes to create new car
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
  res.send(newCar);
});

//All car
router.get("/car", (req, res) => {
  Car.find()
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      if (err) throw err;
    });
  console.log("this is car");
});

//Get car by id
router.get("/car/:id", (req, res) => {
  Car.findById(req.params.id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//update Car
router.put("/car/:id", (req, res) => {
  Car.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Car.findOne({ _id: req.params.id }).then(function (car) {
        res.send(car);
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
});

router.delete("/car/:id", (req, res) => {
  Car.findByIdAndRemove({ _id: req.params.id }).then((car) => {
    res.send(car);
  });
});

module.exports = router;
