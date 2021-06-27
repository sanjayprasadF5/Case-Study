const express = require("express");
const router = express.Router();
const axios = require("axios");
// const adminAuth = require("../middlewares/adminmiddleware");
// const customer = require("../models/customerDetails");

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

router.get("/customersCount", function (req, res) {
  axios.get("http://localhost:3000/customercount").then((response) => {
    customerDetails.count({}, function (err, doc) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(doc);
      }
    });
  });
});

module.exports = router;
