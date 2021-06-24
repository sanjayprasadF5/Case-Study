const mongoose = require("mongoose");

const washerSchema = mongoose.Schema({
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

const Washer = mongoose.model("Washer", washerSchema);
module.exports = Washer;
