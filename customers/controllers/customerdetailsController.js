const customerDetails = require("../models/customerdeatilsmodel");

//handle errors
const handleErrors = (err) => {
  let error = {};

  //duplicate error code

  if (err.code === 11000) {
    error.name = "Entered customer name is already present";
    return error;
  }

  if (err.message.includes("customerDetails validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

//Defining Routes for customer
module.exports.get_customer = (req, res) => {
  customerDetails.find({}, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).send(docs);
    }
  });
};

//post the user details
module.exports.post_customer = async function (req, res) {
  var details = req.body;

  customerDetails.create(details, function (err, result) {
    if (err) {
      const error = handleErrors(err);
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
};

//fetch the document of customer by Id
module.exports.get_specific_customer = function (req, res) {
  const id = req.params.id;
  customerDetails.findById(id, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).send(doc);
    }
  });
};

//find document by Id and update the details
module.exports.update_customer = (req, res) => {
  customerDetails
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      customerDetails
        .findOne({ _id: req.params.id })
        .then((customerdetails) => {
          res.json(customerdetails);
        });
    })
    .catch((err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
};

//Delete customer

//delete service ServicePlan
module.exports.delete_customer = (req, res) => {
  customerDetails
    .findByIdAndRemove({ _id: req.params.id })
    .then((customerDetails) => {
      res.send(customerDetails + "Document Deleted");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
};
