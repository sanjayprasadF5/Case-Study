// const express = require("express");

// const app = express();
// const bodyParser = require("body-parser");

// //
// app.use(express.json());

// //connect mongo
// const mongoose = require("mongoose");

// require("./Customer");
// const Customer = mongoose.model("Customer");

// const dbURI =
//   "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/customerdb?retryWrites=true&w=majority";
// mongoose.connect(
//   dbURI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },
//   () => {
//     console.log("database connected");
//   }
// );

// //Routes
// app.get("/", (req, res) => {
//   res.send("I m Customer system");
// });

// app.post("/customer", (req, res) => {
//   var newCustomer = {
//     name: req.body.name,
//     address: req.body.address,
//     carName: req.body.carName,
//   };

//   var customer = new Customer(newCustomer);

//   customer
//     .save()
//     .then(() => {
//       console.log("New Customer added successfully");
//     })
//     .catch((err) => {
//       if (err) throw err;
//     });
//   res.send("New customer added successfully");
// });

// const port = process.env.port || 2000;
// app.listen(port, () => {
//   console.log(`Customer server is running on port ${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Initialize Routes

//routes
const customerroutes = require("./routes/customerroutes");
const orderroutes = require("./routes/orderroutes");
const carroutes = require("./routes/carroutes");
const profileroutes = require("./routes/profileroutes");
const myorderroutes = require("./routes/myorderroutes");
const schedulelaterroutes = require("./routes/schedulelaterroutes");
const leaderboardroutes = require("./routes/leaderboardroutes");
const washerroutes = require("./routes/findwasherroutes");
const serviceaddonpromocode = require("./routes/serviceaddonpromocode");

const app = express();

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

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/uploads/images", express.static("uploads"));
app.use("/", [
  customerroutes,
  orderroutes,
  carroutes,
  profileroutes,
  myorderroutes,
  schedulelaterroutes,
  leaderboardroutes,
  washerroutes,
  serviceaddonpromocode,
]);

//Listen to port: Default is 3000
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("listening to port ", port);
});

module.exports = app;
