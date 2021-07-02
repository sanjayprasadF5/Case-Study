const orderDetail = require("../models/orderwashermodel");
const MongoClient = require("mongodb").MongoClient;
//handle errors
const handleErrors = (err) => {
  let error = {};

  //duplicate error code

  if (err.code === 11000) {
    error.name = "Entered order name is already present";
    return error;
  }

  if (err.message.includes("orderDetail validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

//Defining Routes for customer
module.exports.get_order = (req, res) => {
  orderDetail.find({}, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).send(docs);
    }
  });
};

//post the user details
module.exports.post_order = async function (req, res) {
  var details = req.body;

  orderDetail.create(details, function (err, result) {
    if (err) {
      const error = handleErrors(err);
      res.status(400).json(error);
    } else {
      res.status(200).send("You have send responsed to customer order");
    }
  });
};

module.exports.order_city = (req, res) => {
  MongoClient.connect(
    `mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/customerdb?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (connectErr, client) {
      const coll = client.db("customerdb").collection("orderdetails");
      const query = { city: req.params.city };
      coll.find(query).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        client.close();
      });
    }
  );
};
