const express = require("express");
const router = express.Router();
// const adminAuth = require("../middlewares/adminMiddleware");
const customerDetails = require("../models/customermodel");

router.get("/leaderboard", (req, res) => {
  customerDetails
    .find({}, function (err, doc) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).send(doc);
      }
    })
    .sort({ noOfWashes: -1 });
});

module.exports = router;
