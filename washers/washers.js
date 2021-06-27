const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const app = express();
/----------------------------------------------------------------/;
//Swagger API Testing

// const swaggerUi = require("swagger-ui-express");

// swaggerDocument = require("./swaggers/washerdetails.json");
// app.use("/api-washer", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// //routes

const washerdetails = require("./routes/washerdetailsRoutes");
const washerauth = require("./routes/washerauthRoutes");
//Connect to Customers Database
const dbURI =
  "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/washerdb?retryWrites=true&w=majority";
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database connected for customer (washerdb)");
  }
);
//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/", [washerdetails, washerauth]);

const port = process.env.PORT || 7000;

app.listen(port, function () {
  console.log(`Washer Server is running ${port}`);
});

module.exports = app;
