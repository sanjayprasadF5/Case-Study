const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const app = express();
/----------------------------------------------------------------/;
//Swagger API Testing

const swaggerUi = require("swagger-ui-express");

swaggerDocument = require("./swaggers/customerDetails");
app.use("/api-customer", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
const authRoutes = require("./routes/authRoutes");
// const orderRoutes = require("./routes/carRoutes");
const carRoutes = require("./routes/viewcarRoutes");
const profileRoutes = require("./routes/customerdetailsRoutes");
const promocode = require("./routes/viewpromoRoutes");
const Service = require("./routes/viewserviceRoutes");
const Addon = require("./routes/viewaddonRoutes");
const leaderboard = require("./routes/leaderboard");
const orderDetail = require("./routes/orderRoutes");
const payment = require("./routes/payment");

//Connect to Customers Database
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
    console.log("Database connected for customer (customerdb)");
  }
);
//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
// app.use("/uploads/images", express.static("uploads"));
app.use("/", [
  authRoutes,
  profileRoutes,
  payment,
  carRoutes,
  promocode,
  Service,
  Addon,
  leaderboard,
  orderDetail,
  // myordersRoutes,
  // scheduledLater,
  // leaderboard,
  // washerRoute,
]);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Customer Server is running ${port}`);
});

module.exports = app;
