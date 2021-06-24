const express = require("express");
const router = express.Router();
// const adminAuth = require("../middlewares/adminmiddleware");
const order = require("../models/order");
const router = Router();

router.get("/completedOrdersCount", (req, res) => {
  order.count({ status: "completed" }, (err, count) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(count);
    }
  });
});

module.exports = router;
