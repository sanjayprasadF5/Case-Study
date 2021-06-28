const customerDetails = require("../models/customerdeatilsmodel");
const MongoClient = require("mongodb").MongoClient;
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

//delete service Customer
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

module.exports.get_washer_name = (req, res) => {
  MongoClient.connect(
    `mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/washerdb?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (connectErr, client) {
      const coll = client.db("washerdb").collection("washerdetails");
      const query = { name: req.params.name };
      coll.find(query).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        client.close();
      });
    }
  );
};
