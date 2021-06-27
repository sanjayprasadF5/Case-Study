const promocode = require("../models/readonlymodel");
const axios = require("axios");

module.exports.get_promocode = function (req, res) {
  axios
    .get("http://localhost:5000/promocode")
    .then((response) => {
      var view_promocode = response.data;
      res.send(view_promocode);
    })
    .catch((err) => {
      if (err) throw err;
    });
};
