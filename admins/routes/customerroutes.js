const express = require("express");
const adminAuth = require("../middlewares/adminmiddleware");
const customer = require("../models/customerDetails");
const router = express.Router();

router.get("/customersCount", adminAuth, (req, res) => {
  customer.count({}, function (err, doc) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

module.exports = router;
