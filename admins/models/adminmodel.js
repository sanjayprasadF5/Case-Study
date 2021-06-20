const mongoose = require("mongoose");
const { isEmail } = require("validator");
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

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
