const express = require("express");
// const { requireAuth } = require("../middleware/authMiddleware");
const customerDetails = require("../models/customerdeatilsmodel");
const router = express.Router();

router.get("/leaderboard", function (req, res) {
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
