const mongoose = require("mongoose");
const { isMobilePhone } = require("validator");

const customerSchema = new mongoose.Schema({
  name: {
    type: "String",
    lowercase: true,
    unique: true,
    required: [true, "Please enter a name"],
  },
  mobile: {
    type: "String",
    required: [true, "Please enter mobile number"],
    unique: true,
    validate: [isMobilePhone, "en-IN", "Enter a valid mobile number"],
  },
  car: {
    carName: {
      type: "String",
      required: [true, "Enter a car name"],
      lowercase: true,
    },
    carModelNo: {
      type: "String",
      required: [true, "Enter the model of the car"],
    },
  },
  noOfWashes: {
    type: Number,
    default: 0,
    min: 0,
  },
  address: {
    type: "string",
    required: [true],
    lowercase: true,
  },
});

const customerDetails = mongoose.model("customerdetail", customerSchema);
module.exports = customerDetails;
