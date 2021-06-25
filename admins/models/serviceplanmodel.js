const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
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
    required: [true, "Please enter cost"],
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

const ServicePlan = mongoose.model("serviceplan", serviceSchema);
module.exports = ServicePlan;
