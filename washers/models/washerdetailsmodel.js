const mongoose = require("mongoose");
const { isMobilePhone } = require("validator");

const washerSchema = new mongoose.Schema({
  name: {
    type: "string",
    lowercase: true,
    unique: true,
    required: [true, "Please enter your name"],
  },

  address: {
    type: "string",
    required: [true, "Please enter address"],
  },
  noOfWashes: {
    type: "string",
    default: 0,
  },
  mobile: {
    type: "string",
    required: [true, "Please enter mobile number"],
    unique: true,
    validate: [isMobilePhone, "en-IN", "Enter a valid mobile number"],
  },
});

const washerDetails = mongoose.model("washerdetail", washerSchema);
module.exports = washerDetails;
