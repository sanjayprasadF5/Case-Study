const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: "string",
    require: [true, "Please enter an name"],
    unique: true,
  },

  carBrand: {
    type: "string",
    unique: true,
    lowercase: true,
    require: [true, "Please enter a brand"],
  },

  status: {
    type: "string",
    lowercase: true,

    enum: ["active", "inactive"],
    default: "active",
  },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
