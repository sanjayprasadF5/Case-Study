const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

//set up express app
const app = express();

//swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Initialing Routes
// const carroutes = require("./routes/carroutes");
// const serviceplanroutes = require("./routes/serviceplanroutes");
// const washerroutes = require("./routes/washerroutes");
// const promocoderoutes = require("./routes/promocoderoutes");
// const adminroutes = require("./routes/adminroutes");

//another way
app.use("/", require("./routes/carroutes"));
app.use("/", require("./routes/serviceplanroutes"));
app.use("/", require("./routes/washerroutes"));
app.use("/", require("./routes/promocoderoutes"));
app.use("/", require("./routes/adminroutes"));

//use middleware
app.use(express.json());
// app.use(cookieParser());
// app.use("/", [
//   carroutes,
//   serviceplanroutes,
//   washerroutes,
//   promocoderoutes,
//   adminroutes,
// ]);
//requiring Model---no need of model ..model need in controller

// require("./models/carmodel");
// require("./models/serviceplanmodel");
// require("./models/washermodel");

//Swagger config

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Admin API",
      description: "Admin microservices",
      contact: {
        name: "Sanjay Prasad",
      },
      server: [
        {
          url: "http://localhost:5000/",
        },
      ],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
