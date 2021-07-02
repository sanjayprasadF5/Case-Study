const orderDetail = require("../models/ordermodel");
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
      res.status(400).json(err);
    } else {
      res.status(200).send("Thanks for Booking, A washer will Contact you");
    }
  });
};

//fetch the document of order by Id
module.exports.get_specific_order = function (req, res) {
  const id = req.params.id;
  orderDetail.findById(id, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).send(doc);
    }
  });
};

//find document by Id and update the details
module.exports.update_order = (req, res) => {
  orderDetail
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      orderDetail.findOne({ _id: req.params.id }).then((orderDetail) => {
        res.status(200).send("Update has done");
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
module.exports.delete_order = (req, res) => {
  orderDetail
    .findByIdAndRemove({ _id: req.params.id })
    .then((orderDetail) => {
      res.status(200).send("Order Cancelled");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
};

module.exports.get_response_status = (req, res) => {
  MongoClient.connect(
    `mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/washerdb?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (connectErr, client) {
      const coll = client.db("washerdb").collection("orderdetails");
      const query = { status: req.params.status };
      coll.find(query).toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        client.close();
      });
    }
  );
};

// module.exports.get_washer_name = (req, res) => {
//   MongoClient.connect(
//     `mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/washerdb?retryWrites=true&w=majority`,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     function (connectErr, client) {
//       const coll = client.db("washerdb").collection("washerdetails");
//       const query = { name: req.params.name };
//       coll.find(query).toArray(function (err, result) {
//         if (err) throw err;
//         res.send(result);
//         client.close();
//       });
//     }
//   );
// };
