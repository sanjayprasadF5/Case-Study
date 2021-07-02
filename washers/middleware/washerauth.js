const jwt = require("jsonwebtoken");

const washerAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized Request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized Request");
  }
  let payload = jwt.verify(token, "Washer Is Boss");
  if (!payload) {
    return res.status(401).send("Unauthorized Request");
  }
  req.userId = payload.id;
  next();
};
// **/
//   console.log("Here cookie", req.cookies);
//   const token = req.cookies.jwt;

//   // check json web token exists & is valid
//   if (token) {
//     console.log("We are here");
//     jwt.verify(token, "Admin is the Head", (err, decodedToken) => {
//       if (err) {
//         console.log(err.message);
//         // res.redirect("/login");
//       } else {
//         console.log(decodedToken);
//         next();
//       }
//     });
//   } else {
//     // res.redirect("/login");
//   }
// };

// const adminAuth = (req, res, next) => {
//   const token = req.cookies.jwt;

//   if (token) {
//     jwt.verify(token, "Admin is the Head", async (err, decodedToken) => {
//       if (err) {
//         res.json({ message: "Unauthorized client" });
//       } else {
//         console.log(decodedToken.id);
//         next();
//       }
//     });
//   } else {
//     res.json({ message: "Please login" });
//   }
// };

module.exports = washerAuth;
