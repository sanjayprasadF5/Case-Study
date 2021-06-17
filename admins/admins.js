const express = require("express");
const bodyParser = require("body-parser");

//set up express app
const app = express();

//use bodyParser middleware
app.use(bodyParser.json());

//Initialing Routes
app.use("/", require("./routes/carroutes"));

//requiring Model
require("./models/carmodel");

//loading mongo
const mongoose = require("mongoose");
const dbURI =
  "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/admindb?retryWrites=true&w=majority";
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("database connected");
  }
);

//port define
const port = process.env.port || 5000;

//Listen

app.listen(port, () => {
  console.log(`Admin server is listening on ${port}`);
});
