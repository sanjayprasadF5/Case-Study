const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  /**
  if(!req.headers.authorization){
    return res.status(401).send("Unauthorized Request")
}
let token = req.headers.authorization.split(' ')[1];
if(token === 'null'){
    return res.status(401).send("Unauthorized Request")
}
let payload = jwt.verify(token,'Admin is the superuser')
if(!payload){
    return res.status(401).send("Unauthorized Request")
}
req.userId = payload.id;
next();
**/

  const token = req.cookies.jwt;

  // check json web token exists & is valid
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

module.exports = adminAuth;
