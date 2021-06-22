const mongoose = require("mongoose");

//Connect to admin db to read data
const admin =
  "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/admindb?retryWrites=true&w=majority";
const conn = mongoose.createConnection(admin, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//Connect to washers db to read details : to find nearby washers
const washer =
  "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/washerdb?retryWrites=true&w=majority";
const washerconn = mongoose.createConnection(washer, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

//from admin db
const car = conn.model("Car", new mongoose.Schema({}));
const addon = conn.model("Addon", new mongoose.Schema({}));
const promocode = conn.model("PromoCode", new mongoose.Schema({}));
const servicePlan = conn.model("ServicePlan", new mongoose.Schema({}));

//from washer details collection
const washerDetails = washerconn.model("washerdetail", new mongoose.Schema({}));

module.exports = { car, addon, promocode, servicePlan, washerDetails };
