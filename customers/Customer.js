//

const mongoose = require("mongoose");

mongoose.model("Customer", {
  name: {
    type: "String",
    require: true,
  },

  address: {
    type: "String",
    require: true,
  },

  carName: {
    type: "String",
    require: true,
  },
});

//module.exports = Customer;
