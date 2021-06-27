const mongoose = require("mongoose");
const brcypt = require("bcrypt");
const { isEmail } = require("validator");

const washerauthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [5, "Minimum length is 5 characters"],
  },
});

//Hashing password
washerauthSchema.pre("save", async function (next) {
  const salt = await brcypt.genSalt();
  this.password = await brcypt.hash(this.password, salt);
  next();
});

//Static method to login user
washerauthSchema.statics.login = async function (email, password) {
  const washer = await this.findOne({ email });
  if (washer) {
    const washer = await brcypt.compare(password, washer.password);
    if (washer) {
      return washer;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Incorrect email");
};

const WasherAuth = mongoose.model("washerauth", washerauthSchema);
module.exports = WasherAuth;
