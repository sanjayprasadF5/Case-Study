const Car = require("../models/carmodel");

//Error handling

//handling errors
const handleErrors = (err) => {
  let error = {
    name: "",
    carBrand: "",
    status: "",
  };

  //duplicate service plan name
  if (err.code === 11000) {
    error.carBrand = "Entered car barnd is already present";
    return error;
  }

  if (err.message.includes("Car validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};
//Route handlers for

//Post car route handlers

module.exports.postCar = (req, res) => {
  var newCar = {
    name: req.body.name,
    carBrand: req.body.carBrand,
    status: req.body.status,
  };

  var car = new Car(newCar);
  car
    .save()
    .then(() => {
      res.status(200).send(car);
    })
    .catch((err) => {
      // if (err) throw err;
      // if (err) {
      //   res.status(400).send("Can't create car'");
      // }
      const errors = handleErrors(err);
      res.status(400).send(errors);
    });
  // res.send(newCar);

  // const { name, carBrand, status } = res.body;
  // try {
  //   const car = await Car.create({ name, carBrand, status });
  //   res.status(201).json(car);
  // } catch (err) {
  //   res.status(400).json("Can't be created");
  // }
};

//Get car route handlers
module.exports.getCar = (req, res) => {
  Car.find()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
  console.log("Get all car");
};

//Get car by ID route handlers ID

module.exports.getCarID = (req, res) => {
  Car.findById(req.params.id)
    .then((car) => {
      res.sendstatus(200).json(car);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
};

//Update car route handlers

module.exports.updateCar = (req, res) => {
  Car.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Car.findOne({ _id: req.params.id }).then(function (car) {
        res.sendStatus(200).send(car);
      });
    })
    .catch((err) => {
      // if (err) throw err;
      if (err) {
        res.sendStatus(400).send("can't update erro");
      }
    });
};

//Delete a car route handlers

module.exports.deleteCar = (req, res) => {
  Car.findByIdAndRemove({ _id: req.params.id })
    .then((car) => {
      res.sendStatus(200).send(car);
    })
    .catch((err) => {
      if (err) {
        // console.log("Can't be deleted");
        res.sendStatus(400);
      }
    });
};
