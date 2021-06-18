const Car = require("../models/carmodel");

//Route handlers for

//Post car route handlers
module.exports.postCar = (req, res) => {
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
};

//Get car route handlers
module.exports.getCar = (req, res) => {
  Car.find()
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      if (err) throw err;
    });
  console.log("this is car");
};

//Get car by ID route handlers ID

module.exports.getCarID = (req, res) => {
  Car.findById(req.params.id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//Update car route handlers

module.exports.updateCar = (req, res) => {
  Car.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Car.findOne({ _id: req.params.id }).then(function (car) {
        res.send(car);
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//Delete a car route handlers

module.exports.deleteCar = (req, res) => {
  Car.findByIdAndRemove({ _id: req.params.id }).then((car) => {
    res.send(car);
  });
};
