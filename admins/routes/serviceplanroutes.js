const express = require("express");
const router = express.Router();
const ServicePlan = require("../models/serviceplanmodel");

//Routes for Service plan

//POST routes to create new service plan
router.post("/serviceplan", (req, res) => {
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
});

//All Services
router.get("/serviceplan", (req, res) => {
  ServicePlan.find()
    .then((serviceplan) => {
      res.json(serviceplan);
    })
    .catch((err) => {
      if (err) throw err;
    });
  console.log("this is service plan");
});

//Get car by id
router.get("/serviceplan/:id", (req, res) => {
  ServicePlan.findById(req.params.id)
    .then((serviceplan) => {
      res.json(serviceplan);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//update Service plan
router.put("/serviceplan/:id", (req, res) => {
  ServicePlan.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      ServicePlan.findOne({ _id: req.params.id }).then((serviceplan) => {
        res.send(serviceplan);
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
});

//Delete plan

router.delete("/serviceplan/:id", (req, res) => {
  ServicePlan.findByIdAndRemove({ _id: req.params.id }).then((serviceplan) => {
    res.send(serviceplan);
  });
});

module.exports = router;
