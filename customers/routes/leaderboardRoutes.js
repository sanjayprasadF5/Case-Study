const express = require("express");
const router = express.Router();

const requireAuth = require("../middlewares/authMiddleware");
const customerDetails = require("../models/profilemodel");

router.get("/leaderboard", requireAuth, (req, res) => {
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
