const express = require("express");

const app = express();
const bodyParser = require("body-parser");

//
app.use(express.json());

//connect mongo
const mongoose = require("mongoose");

require("./Customer");
const Customer = mongoose.model("Customer");

const dbURI =
  "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/customerdb?retryWrites=true&w=majority";
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

//Routes
app.get("/", (req, res) => {
  res.send("I m Customer system");
});

app.post("/customer", (req, res) => {
  var newCustomer = {
    name: req.body.name,
    address: req.body.address,
    carName: req.body.carName,
  };

  var customer = new Customer(newCustomer);

  customer
    .save()
    .then(() => {
      console.log("New Customer added successfully");
    })
    .catch((err) => {
      if (err) throw err;
    });
  res.send("New customer added successfully");
});

const port = process.env.port || 2000;
app.listen(port, () => {
  console.log(`Customer server is running on port ${port}`);
});
