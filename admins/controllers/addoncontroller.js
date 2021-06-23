const Addon = require("../models/addonmodel");

//handling errors
const handleErrors = (err) => {
  let error = {
    name: "",
    forServices: "",
    cost: "",
    status: "",
  };

  //duplicate service plan name
  if (err.code === 11000) {
    error.name = "Entered addon name is already present";
    return error;
  }

  if (err.message.includes("Addon validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

//Route handlers

//POST /
module.exports.postaddon = (req, res) => {
  const newaddon = req.body;
  Addon.create(newaddon, (err, result) => {
    if (err) {
      const error = handleErrors(err);
      res.sendStatus(400);
    } else {
      res.status(200).json(result);
    }
  });
};

//GET /
module.exports.getaddon = (req, res) => {
  Addon.find({}, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).send(docs);
    }
  });
};

//GET by _id
module.exports.getidaddon = (req, res) => {
  const id = req.params.id;
  Addon.findById(id, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).send(doc);
    }
  });
};

//PUT /
module.exports.putaddon = function (req, res) {
  const id = req.params.id;
  const newaddon = req.body;
  Addon.findByIdAndUpdate(id, newaddon, { new: true }, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
};

//DELETE

module.exports.deleteaddon = function (req, res) {
  const id = req.params.id;
  Addon.findByIdAndDelete(id, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).send(doc);
    }
  });
};
