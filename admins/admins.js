const express = require("express");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

//----------------------------------------------------------------/
const swaggerUi = require("swagger-ui-express");
// swaggerDocument = require("./swagger.json");

//Car
swaggerDocument = require("./swaggerfile/carswagger.json");
app.use("/api-car", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//ServicePlan
swaggerDocument2 = require("./swaggerfile/serviceswagger.json");
app.use("/api-service", swaggerUi.serve, swaggerUi.setup(swaggerDocument2));

//Add on
swaggerDocument3 = require("./swaggerfile/addonswagger.json");
app.use("/api-addon", swaggerUi.serve, swaggerUi.setup(swaggerDocument3));

//Promocode
swaggerDocument4 = require("./swaggerfile/promoswagger.json");
app.use("/api-promocode", swaggerUi.serve, swaggerUi.setup(swaggerDocument4));

//Washer
swaggerDocument5 = require("./swaggerfile/washerswagger.json");
app.use("/api-washer", swaggerUi.serve, swaggerUi.setup(swaggerDocument5));

//----------------------------------------------------------------/

//Importing routes
const adminroutes = require("./routes/adminroutes");
const carroutes = require("./routes/carroutes");
const promocoderoutes = require("./routes/promocoderoutes");
const serviceplanroutes = require("./routes/serviceplanroutes");
const washerroutes = require("./routes/washerroutes");
const addonroutes = require("./routes/addonroutes");
// ----------------------------------------------------------------/

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
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use("/", [
  adminroutes,
  carroutes,
  promocoderoutes,
  serviceplanroutes,
  washerroutes,
  addonroutes,
]);
// app.use(express.json());

const port = process.env.port || 5000;

//Listen

app.listen(port, () => {
  console.log(`Admin server is listening on ${port}`);
});

module.exports = app;
