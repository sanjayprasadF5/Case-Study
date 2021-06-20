const ServicePlan = require("../models/serviceplanmodel");

//Error handling

const handlerError = (err) => {
  console.log(err.message, err.code);

  let errors = {
    name: "",
    time: "",
    cost: "",
    description: "",
    status: "",
  };

  //duplicate errors --same service plan found
  if (err.code === 11000) {
    errors.name = "Service plan already exists";
    return errors;
  }

  //validating errors
  if (err.message.includes("ServicePlan validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

//Route handler for service plan routes

//Post service plan

module.exports.postserviceplan = (req, res) => {
  var newserviceplan = {
    name: req.body.name,
    time: req.body.time,
    cost: req.body.cost,
    description: req.body.description,
    status: req.body.status,
  };

  var serviceplan = new ServicePlan(newserviceplan);

  serviceplan
    .save()
    .then(() => {
      console.log("Service plan saved");
      res.status(200).send(serviceplan);
    })
    .catch((err) => {
      //if (err) throw err;
      const errors = handlerError(err);
      res.status(400).send(errors);
    });
};

//Get All Service

module.exports.getserviceplan = (req, res) => {
  ServicePlan.find()
    .then((serviceplan) => {
      res.json(serviceplan);
    })
    .catch((err) => {
      if (err) throw err;
    });
  console.log("this is service plan");
};

//Get Service plan by id

module.exports.getserviceplanID = (req, res) => {
  ServicePlan.findById(req.params.id)
    .then((serviceplan) => {
      res.json(serviceplan);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//Update service plan

module.exports.updateserviceplan = (req, res) => {
  ServicePlan.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      ServicePlan.findOne({ _id: req.params.id }).then((serviceplan) => {
        res.send(serviceplan);
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//delete service ServicePlan
module.exports.deleteserviceplan = (req, res) => {
  ServicePlan.findByIdAndRemove({ _id: req.params.id }).then((serviceplan) => {
    res.send(serviceplan);
  });
};
