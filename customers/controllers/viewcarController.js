const car = require("../models/readonlymodel");
const axios = require("axios");

module.exports.get_cars = function (req, res) {
  axios
    .get("http://localhost:5000/car")
    .then((response) => {
      var viewcar = response.data;
      res.send(viewcar);
    })
    .catch((err) => {
      if (err) throw err;
    });
};

//   router.get('/viewfarmer',(req,res,next)=>{
//     axios.get("http://localhost:3000/farmers").then((response)=>{
//         var viewFarmer = response.data;
//         res.send(viewFarmer);

//     });
// });
// router.get('/viewfarmers',(req,res,next)=>{
//     axios.get("http://localhost:3000/farmer/60cf230f9d0a832b54414c9a").then((response)=>{
//         var viewFarmer = response.data.name;
//         res.send(viewFarmer);

//     });
// });
