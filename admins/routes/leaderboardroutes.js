const express = require("express");
const router = express.Router();
const axios = require("axios");
// const adminAuth = require("../middlewares/adminMiddleware");

router.get("/leaderboard", (req, res) => {
  axios
    .get("http://localhost:3000/leaderboard")
    .then((response) => {
      var leaderboard = response.data;
      res.send(leaderboard);
    })
    .catch((err) => {
      if (err) throw err;
    });
});

module.exports = router;
