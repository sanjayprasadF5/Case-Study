const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, "Admin is the Head", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        // res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    // res.redirect("/login");
  }
};

module.exports = { adminAuth };
