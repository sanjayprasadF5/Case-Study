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
      // if (err) throw err;
      if (err) {
        res.status(400).send("Can't create car'");
      }
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
      if (err) {
        res.status(404).send("can't get car");
      }
    });
  console.log("We are on getting car by id");
};

//Get car by ID route handlers ID

module.exports.getCarID = (req, res) => {
  Car.findById(req.params.id)
    .then((car) => {
      res.json(car);
    })
    .catch((err) => {
      if (err) {
        res.status(400).send("Can't find car'");
      }
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
      // if (err) throw err;
      if (err) {
        res.status(404).send("can't update erro");
      }
    });
};

//Delete a car route handlers

module.exports.deleteCar = (req, res) => {
  Car.findByIdAndRemove({ _id: req.params.id })
    .then((car) => {
      res.send(car);
    })
    .catch((err) => {
      if (err) {
        // console.log("Can't be deleted");
        res.status(404).send("Can't be deleted'");
      }
    });
};
