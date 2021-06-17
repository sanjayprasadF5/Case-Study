const mongoose = require("mongoose");
mongoose.model("Car", {
  name: {
    type: "string",
    require: true,
  },

  carBrand: {
    type: "string",
    require: true,
  },
});
