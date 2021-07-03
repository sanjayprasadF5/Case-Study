const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/dopayment", (req, res) => {
  axios
    .post("http://localhost:2000/payment", req.body)
    .then((response) => {
      console.log(response.data);
      var payment = response.data;
      res.send(payment);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

module.exports = router;
