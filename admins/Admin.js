const mongoose = require("mongoose");

mongoose.model("Admin", {
  name: {
    type: "String",
    require: true,
  },
});
