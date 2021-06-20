const mongoose = require("mongoose");

module.exports = mongoose.model("ServicePlan", {
  name: {
    type: "string",
    lowercase: true,
    unique: true,
    require: [true, "Please enter service plan name"],
  },

  time: {
    type: "string",
    require: [true, "Please enter time required in minutes"],
  },

  cost: {
    type: Number,
    require: [true, "Please enter cost"],
  },

  description: {
    type: "string",
    required: [true, "Please enter description"],
  },

  status: {
    type: "string",
    lowercase: true,

    enum: ["active", "inactive"],
    default: "active",
  },
});
