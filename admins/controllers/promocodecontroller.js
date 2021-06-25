const PromoCode = require("../models/promocodemodel");

//Error handling

const handlerError = (err) => {
  // console.log(err.message, err.code);

  let errors = {
    name: "",
    discount: "",
    forService: "",
    expireOn: "",
    status: "",
  };

  //duplicate errors
  if (err.code === 11000) {
    errors.name = "that promo code is already exists";
    return errors;
  }

  //validating errors
  if (err.message.includes("PromoCode validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
//routes handlers
//Post promocodemodel
module.exports.postpromocode = (req, res) => {
  var newpromocode = {
    name: req.body.name,
    discount: req.body.discount,
    forService: req.body.forService,
    expireOn: req.body.expireOn,
    status: req.body.status,
  };
  var promocode = new PromoCode(newpromocode);

  promocode
    .save()
    .then(() => {
      console.log("promo code created");
      res.status(200).send(promocode);
    })
    .catch((err) => {
      //console.log(err);
      const errors = handlerError(err);
      res.status(400).send(errors);
    });
};

//Get promocode

module.exports.getpromocode = (req, res) => {
  PromoCode.find()
    .then((promocode) => {
      res.status(200).json(promocode);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
  console.log("We are getting the promocode");
};

//Get promocode  by _id

module.exports.getpromocodeId = (req, res) => {
  PromoCode.findById(req.params.id)
    .then((promocode) => {
      res.sendStatus(200).send(promocode);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
  console.log("We are on promocode by id");
};

//Update promocode
module.exports.updatepromocode = (req, res) => {
  PromoCode.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      PromoCode.findOne({ _id: req.params.id }).then((promocode) => {
        res.sendStatus(200).send(promocode);
      });
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
};

//delete promocode
module.exports.deletepromocode = (req, res) => {
  PromoCode.findByIdAndRemove({ _id: req.params.id })
    .then((promocode) => {
      res.sendStatus(200).send(promocode);
    })
    .catch((err) => {
      if (err) {
        res.sendStatus(400);
      }
    });
};
