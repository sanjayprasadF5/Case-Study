const Car = require("../models/carmodel");

//Error handling

const handlerError = (err) => {
  console.log(err.message, err.code);

  let errors = {
    name: "",
    carBrand: "",
    status: "",
  };

  //duplicate errors code

  if (err.code === 11000) {
    errors.name = "that car already exists";
    return errors;
  }

  //validating errors

  if (err.message.includes("Car validation failed")) {
    // console.log(err);
    //console.log(err.errors);  -- give key with value
    //console.log(Object.value(err.errors)); --- only values
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
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
      res.status(car);
    })
    .catch((err) => {
      // if (err) throw err;
      // if (err) {
      //   res.status(400).send("Can't create car'");
      // }
      const errors = handlerError(err);
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
