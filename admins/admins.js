const express = require("express");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Importing routes
const adminroutes = require("./routes/adminroutes");
const carroutes = require("./routes/carroutes");
const promocoderoutes = require("./routes/promocoderoutes");
const serviceplanroutes = require("./routes/serviceplanroutes");
const washerroutes = require("./routes/washerroutes");

const app = express();

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

//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use("/", [
  adminroutes,
  carroutes,
  promocoderoutes,
  serviceplanroutes,
  washerroutes,
]);
app.use(express.json());

//Swagger
const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Admin API",
      version: "1.0.0",
      description: "Admin Microservice",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//port define
const port = process.env.port || 5000;

//Listen

app.listen(port, () => {
  console.log(`Admin server is listening on ${port}`);
});

module.exports = app;
