const mongoose = require("mongoose");
const { isEmail } = require("Validator");

//This is washer databases and here admin is connecting to
//washer by his credentials

//loading mongo

const dbURI =
  "mongodb+srv://sanjayprasadF5:sanjay123@cluster0.t4byc.mongodb.net/customerdb?retryWrites=true&w=majority";
const conn = mongoose.createConnection(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("Database connected for washer(washerdb)");
  }
);

const washerSchema = new mongoose.Schema({
  email: {
    type: "string",
    require: [true, "Please enter an email address"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email address"],
  },

  password: {
    type: "string",
    require: [true, "Please enter a password"],
    minlength: [8, "Please enter 8 length password"],
  },

  isApprove: {
    type: "boolean",
    default: false,
  },
});

const Washer = mongoose.model("Washer", washerSchema);
const washerDetails = conn.model("washerdetail", new mongoose.Schema({}));
module.exports = Washer;
module.exports = washerDetails;
