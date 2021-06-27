const car = require("../models/readonlymodel");
const axios = require("axios");

module.exports.get_service = function (req, res) {
  axios
    .get("http://localhost:5000/serviceplan")
    .then((response) => {
      var service = response.data;
      res.send(service);
    })
    .catch((err) => {
      if (err) throw err;
    });
};
