const order = require("../models/ordermodel");

module.exports.get_scheduled_orders = function (req, res) {
  const id = req.userId;
  order.find(
    {
      $and: [
        { "userDetails.userId": id },
        { isScheduledLater: true },
        { status: { $ne: "cancelled" } },
      ],
    },
    function (err, docs) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(docs);
      }
    }
  );
};
