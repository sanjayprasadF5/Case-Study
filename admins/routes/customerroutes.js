const express = require("express");
const router = express.Router();
// const adminAuth = require("../middlewares/adminmiddleware");
const customer = require("../models/customerDetails");

router.get("/customersCount", (req, res) => {
  customer.count({}, function (err, doc) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

module.exports = router;
