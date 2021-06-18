const mongoose = require("mongoose");

module.exports = mongoose.model("Washer", {
  name: {
    type: "string",
    requires: true,
  },

  emailID: {
    type: "string",
    requires: true,
  },

  password: {
    type: "string",
    requires: true,
  },

  isApprove: {
    type: "boolean",
    default: false,
  },
});
