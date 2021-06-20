const mongoose = require("mongoose");

module.exports = mongoose.model("PromoCode", {
  name: {
    type: "string",
    minlength: [5, "Minimum 5 character"],
    unique: true,
    required: [true, "Please enter promocode"],
  },

  discount: {
    type: Number,
    maxlength: 3,
    minlength: 1,
    required: [true, "Please enter Discount Percentage"],
  },

  forService: {
    type: "string",
    lowercase: true,
  },

  expireOn: {
    type: Date,
    required: true,
  },

  status: {
    type: "string",
    lowercase: true,
    enum: ["active", "inactive"],
    default: "active",
  },
});
