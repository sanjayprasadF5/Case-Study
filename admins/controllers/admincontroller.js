const Admin = require("../models/adminmodel");

//handling errors
const handlerError = (err) => {
  console.log(err.message, err.code);
  let errors = {
    email: "",
    password: "",
  };

  //duplicate errors
  if (err.code === 11000) {
    errors.email = "that email has already registered";
    return errors;
  }

  //validate errors
  if (err.message.includes("admin validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
};

//controller action for Routes

module.exports.getsignup = (req, res) => {
  res.send("I m singing up");
};

module.exports.postsignup = (req, res) => {
  //   res.send("I m post signup");
  var newadmin = {
    email: req.body.email,
    password: req.body.password,
  };

  var admin = new Admin(newadmin);
  admin
    .save()
    .then((admin) => {
      res.status(200).send(admin);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

module.exports.getlogin = (req, res) => {
  res.send("I m get login");
};

module.exports.postlogin = (req, res) => {
  var loginadmin = {
    email: req.body.email,
    password: req.body.password,
  };

  var newloginadmin = new Admin(loginadmin);
  newloginadmin
    .save()
    .then((newloginadmin) => {
      res.status(200).send(newloginadmin);
    })
    .catch((err) => {
      if (err) throw err;
    });
};
