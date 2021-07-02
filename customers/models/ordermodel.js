const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: "String",
    lowercase: true,
    required: [true, "Please enter a name"],
  },
  mobile: {
    type: "String",
    required: [true, "Please enter mobile number"],
    unique: true,
  },
  carDetails: {
    type: "String",
    required: [true, "Please enter car details"],
  },

  address: {
    type: "string",
    required: [true],
    lowercase: true,
  },

  city: {
    type: "string",
    required: [true, "Please enter city"],
  },

  book_time: {
    type: Date,
    default: Date.now(),
  },
});

const orderDetail = mongoose.model("orderdetail", orderSchema);
module.exports = orderDetail;
