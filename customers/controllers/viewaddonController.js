const car = require("../models/readonlymodel");
const axios = require("axios");

// module.exports.get_addon = function (req, res) {
//   axios
//     .get("http://localhost:5000/addon")
//     .then((response) => {
//       var addon = response.data;
//       res.send(addon);
//     })
//     .catch((err) => {
//       if (err) throw err;
//     });
// };

module.exports.get_addon = function (req, res) {
  axios
    .get("http://localhost:5000/addon")
    .then((response) => {
      var addon = response.data;
      res.json(addon);
    })
    .catch((err) => {
      if (err) throw err;
    });
};
