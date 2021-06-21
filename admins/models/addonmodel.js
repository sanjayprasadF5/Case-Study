const mongoose = require("mongoose");

module.exports = mongoose.model("Addon", {
  name: {
    type: "string",
    lowercase: true,
    unique: true,
    required: [true, "Please enter a addon "],
  },

  forService: {
    type: "String",
    lowercase: true,
    required: [true, "Please enter add applicable"],
  },

  cost: {
    type: Number,
    min: 1,
    required: [true, "Please enter cost "],
  },

  status: {
    type: "String",
    enum: ["active", "inactive"],
    lowercase: true,
  },
});
