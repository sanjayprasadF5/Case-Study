const mongoose = require("mongoose");

module.exports = mongoose.model("Car", {
  name: {
    type: "string",
    require: true,
  },

  carBrand: {
    type: "string",
    require: true,
  },
});
