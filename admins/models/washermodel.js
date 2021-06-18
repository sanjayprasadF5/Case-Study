const mongoose = require("mongoose");

module.exports = mongoose.model("Washer", {
  name: {
    type: "string",
    require: true,
  },

  emailID: {
    type: "string",
    require: true,
  },

  password: {
    type: "string",
    require: true,
  },

  isApprove: {
    type: "boolean",
    default: false,
  },
});
