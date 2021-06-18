const ServicePlan = require("../models/serviceplanmodel");

//Route handler for service plan routes

//Post service plan

module.exports.postserviceplan = (req, res) => {
  var newserviceplan = {
    name: req.body.name,
    time: req.body.time,
    cost: req.body.cost,
    description: req.body.description,
  };

  var serviceplan = new ServicePlan(newserviceplan);

  serviceplan
    .save()
    .then(() => {
      console.log("Service plan saved");
    })
    .catch((err) => {
      if (err) throw err;
    });

  res.send(newserviceplan);
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
