const express = require("express");
const router = express.Router();
const axios = require("axios");
// const adminAuth = require("../middlewares/adminmiddleware");
// const customer = require("../models/customerDetails");
// const MongoClient = require("mongodb").MongoClient;
router.get("/viewcustomer", (req, res) => {
  axios
    .get("http://localhost:3000/customer")
    .then((response) => {
      var viewcustomer = response.data;
      res.json(viewcustomer);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

// router.get("/customersCount", function (req, res) {
//   axios.get("http://localhost:3000/customercount").then((response) => {
//     customerDetails.count({}, function (err, doc) {
//       if (err) {
//         res.status(400).json(err);
//       } else {
//         res.status(200).json(doc);
//       }
//     });
//   });
// });

// router.get("/customercount2") = (req, res) => {
//   MongoClient.connect(
//     `mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/customerdb?retryWrites=true&w=majority`,
//     { useNewUrlParser: true,
//        useUnifiedTopology: true
//       },
//     function (connectErr, client)
//      {
//       const coll = client.db("customerdb").collection("customerdetails");
//       const query = { name: req.params.name };
//       coll.count(query).toArray(function (err, result) {
//         if (err) throw err;
//         res.send(result);
//         client.close();
//       });
//     }
//   );
// };

module.exports = router;
