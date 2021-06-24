const Admin = require("../models/adminmodel");
const jwt = require("jsonwebtoken");

//handling errors
const handlerError = (err) => {
  console.log(err.message, err.code);
  let error = {
    email: "",
    password: "",
  };

  //incorrect email
  if (err.message == "incorrect email") {
    error.email = "Enter email is not registered";
  }

  //incorrect password
  if (err.message == "incorrect password") {
    error.password = "Enter password is Incorrect";
  }

  //duplicate errors
  if (err.code === 11000) {
    error.email = "that email has already registered";
    return error;
  }

  //validate errors
  if (err.message.includes("Admin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
};

//Creating JWT token
const maxAge = 2 * 24 * 60 * 60; //--expires in 2 days
const createToken = (id) => {
  return jwt.sign({ id }, "Admin is the Head", {
    expiresIn: maxAge,
  });
};

//controller action for Routes

//Signup
module.exports.getsignup = (req, res) => {
  res.send("I m singing up");
};

//Signup new
module.exports.postsignup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.create({ email, password });
    const token = createToken(admin._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(admin.id);
  } catch (err) {
    const error = handlerError(err);
    res.status(400).json(error);
    console.log(error);
  }
};

//Login --GET
module.exports.getlogin = (req, res) => {
  res.send("I m get login");
};

//Login--Post
module.exports.postlogin = async function (req, res) {
  const { email, password } = req.body;

  try {
    const admin = await Admin.login(email, password);
    const token = createToken(admin._id);
    //res.cookie('ajwt',token, {httpOnly: true, maxAge : maxAge*1000});
    res.status(200).send(token);
  } catch (error) {
    const err = handlerError(error);
    res.status(400).send(err);
  }
};

// Logout--------------------

module.exports.getlogout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  // res.redirect("/");
  res.send("logged out");
};
