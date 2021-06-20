const Washer = require("../models/washermodel");

//Get all washer

module.exports.getallwasher = (req, res) => {
  Washer.find({})
    .then((washer) => {
      res.json(washer);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//Get single washer

module.exports.getwasherID = (req, res) => {
  Washer.findById(req.params.id)
    .then((washer) => {
      res.json(washer);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//delete washer

module.exports.deletewasher = (req, res) => {
  Washer.findByIdAndRemove(req.params.id)
    .then((washer) => {
      res.json(washer);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//update washer
module.exports.updatewasher = (req, res) => {
  Washer.findByIdAndUpdate(req.params.id)
    .then((washer) => {
      res.json(washer);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//post washer

module.exports.postwasher = (req, res) => {
  var newwasher = {
    name: req.body.name,
    emailID: req.body.emailID,
    password: req.body.password,
    isApprove: req.body.isApprove,
  };

  var washer = new Washer(newwasher);
  washer
    .save()
    .then((washer) => {
      res.json(washer);
    })
    .catch((err) => {
      if (err) throw err;
    });
};