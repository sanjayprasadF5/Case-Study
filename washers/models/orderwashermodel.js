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
  status: {
    type: "string",
    enum: ["accepted", "cancelled", "pending"],
    default: "accepted",
  },
});

const orderDetail = mongoose.model("orderdetail", orderSchema);
module.exports = orderDetail;
