const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/carRoutes");
const carRoutes = require("./routes/carRoutes");
const profileRoutes = require("./routes/profileRoutes");
const myordersRoutes = require("./routes/myorderRoutes");
const scheduledLater = require("./routes/scheduleLaterRoutes");
const leaderboard = require("./routes/leaderboardRoutes");
const washerRoute = require("./routes/findwasherRoutes");
// const serviceAddonPromocode = require("./routes/service_addon_promocode");

const app = express();

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
    console.log("database connected");
  }
);
//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/uploads/images", express.static("uploads"));
app.use("/", [
  authRoutes,
  profileRoutes,
  orderRoutes,
  carRoutes,

  myordersRoutes,
  scheduledLater,
  leaderboard,
  washerRoute,
]);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Customer Server is running ${port}`);
});

module.exports = app;
