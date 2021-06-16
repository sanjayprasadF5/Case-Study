const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(express.json());

const mongoose = require("mongoose");

require("./Admin");
const Admin = mongoose.model("Admin");

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

//Routes
app.get("/", (req, res) => {
  res.send("I m Admin system");
});

app.post("/admin", (req, res) => {
  var newAdmin = {
    name: req.body.name,
  };

  var admin = new Admin(newAdmin);

  admin
    .save()
    .then(() => {
      console.log("Admin added successfully");
    })
    .catch((err) => {
      if (err) throw err;
    });
  res.send("Admin added successfully");
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Admin server is listening on ${port}`);
});
