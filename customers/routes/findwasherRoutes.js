const express = require("express");
const router = express.Router();

const requireAuth = require("../middlewares/authMiddleware");
const washerDetails = require("../models/readonlymodel");

router.get("/findWashers", requireAuth, (req, res) => {
  washerDetails.find({}, function (err, result) {
    if (err) {
      console.log(err);
      res.status(401).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
