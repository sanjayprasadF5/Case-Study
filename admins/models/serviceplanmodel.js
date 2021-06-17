const mongoose = require("mongoose");

module.exports = mongoose.model("ServicePlan", {
  name: {
    type: "string",
    require: true,
  },

  time: {
    type: "string",
    require: true,
  },

  cost: {
    type: Number,
    require: true,
  },

  description: {
    type: "string",
  },
});
