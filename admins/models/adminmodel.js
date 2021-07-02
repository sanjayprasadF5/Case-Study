const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  email: {
    type: "string",
    required: [true, "Please enter a email address"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email address"],
  },

  password: {
    type: "string",
    required: [true, "Please enter a password"],
    minlength: [6, "Please enter password of 6"],
  },
});

//hash th password before said to dbURI
adminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user
adminSchema.statics.login = async function (email, password) {
  const admin = await this.findOne({ email });

  if (admin) {
    const auth = await bcrypt.compare(password, admin.password);
    if (auth) {
      return admin;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
