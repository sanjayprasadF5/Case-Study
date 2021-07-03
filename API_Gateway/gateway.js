const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const api = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const axios = require("axios");
api.use(bodyParser.json());
const adminAuth = require("../admins/middlewares/adminmiddleware");
//get Admin
api.get("/admin", (req, res) => {
  axios.get("http://localhost:5000/signup", req.body).then((response) => {
    res.send(response.data);
  });
});

api.post("/adminsignup", (req, res) => {
  axios
    .post("http://localhost:5000/signup", req.body)
    .then((response) => {
      console.log(response.data);
      var admin = response.data;
      res.send(admin);
    })
    .catch((Error) => {
      res.send(Error);
    });
});

//admin login
api.post("/adminlogin", (req, res) => {
  axios
    .post("http://localhost:5000/login", req.body)
    .then((response) => {
      console.log(response.data);
      var admin = response.data;
      res.send(admin);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//Admin service
api.get("/service", (req, res) => {
  axios.get("http://localhost:5000/serviceplan", req.body).then((response) => {
    res.send(response.data);
  });
});

//get Admin Promo
api.get("/promo", (req, res) => {
  axios
    .get("http://localhost:5000/promocode", req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console(err.message);
    });
});

//get addon
api.get("/addon", (req, res) => {
  axios.get("http://localhost:5000/addon", req.body).then((response) => {
    res.send(response.data);
  });
});

//----------------------------------------------------------------//

//Customer

//Signup
api.post("/customersignup", (req, res) => {
  axios
    .post("http://localhost:3000/signup", req.body)
    .then((response) => {
      console.log(response.data);
      var customer = response.data;
      res.send(customer);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//post customer and car
api.post("/customerlogin", (req, res) => {
  axios
    .post("http://localhost:3000/login", req.body)
    .then((response) => {
      console.log(response.data);
      var customer = response.data;
      res.send(customer);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//signup
api.get("/login", (req, res) => {
  axios.get("http://localhost:3000/login", req.body).then((response) => {
    res.send(response.data);
  });
});
//get customer
api.get("/viewcustomer", (req, res) => {
  axios.get("http://localhost:3000/customer", req.body).then((response) => {
    res.send(response.data);
  });
});

//Washer
//--------------------------------------------------------------//

//Sign As Washer
api.post("/washersignup", (req, res) => {
  axios
    .post("http://localhost:7000/signup", req.body)
    .then((response) => {
      console.log(response.data);
      var washer = response.data;
      res.send(washer);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

api.post("/washerlogin", (req, res) => {
  axios
    .post("http://localhost:7000/login", req.body)
    .then((response) => {
      console.log(response.data);
      var washer = response.data;
      res.send(washer);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

api.get("/viewwasher", (req, res) => {
  axios.get("http://localhost:7000/washer", req.body).then((response) => {
    res.send(response.data);
  });
});

//----------------------------------------------------------------//

//Payment

api.post("/paymentcustomer", (req, res) => {
  axios
    .post("http://localhost:3000/dopayment", req.body)
    .then((response) => {
      console.log(response.data);
      var payment = response.data;
      res.send(payment);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

//
const port = process.env.PORT || 8000;

api.listen(port, function () {
  console.log(`Gateway Server is running ${port}`);
});
