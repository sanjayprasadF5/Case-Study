const washerDetails = require("../models/washerdetailsmodel");

//handle errors
// const handleErrors = (err) => {
//   let error = {};

//   //duplicate error code
//   if (err.code === 11000 && err.message.includes("userId_1 dup key")) {
//     error.userId = "Entered userId is already registered";
//     return error;
//   }
//   if (err.code === 11000 && err.message.includes("name_1 dup key")) {
//     error.name = "Entered name is already registered";
//     return error;
//   }
//   if (err.code === 11000 && err.message.includes("mobile_1 dup key")) {
//     error.mobile = "Entered mobile number is already registered";
//     return error;
//   }

//   if (err.message.includes("washerDetails validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       error[properties.path] = properties.message;
//     });
//   }
//   return error;
// };

const handleErrors = (err) => {
  let error = {};

  //duplicate service plan name
  if (err.code === 11000) {
    error.name = "Entered washer name is already present";
    return error;
  }

  if (err.message.includes("washerDetails validation failed")) {
    Object.values(err.error).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

//Defining Routes for Washer
module.exports.get_washer = (req, res) => {
  washerDetails.find({}, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).send(docs);
    }
  });
};

//post the user details
module.exports.post_washer = async function (req, res) {
  var details = req.body;

  washerDetails.create(details, function (err, result) {
    if (err) {
      const error = handleErrors(err);
      res.status(400).json(error);
    } else {
      res.status(200).json(result);
    }
  });
};

//fetch the document of customer by Id
module.exports.get_specific_washer = function (req, res) {
  const id = req.params.id;
  washerDetails.findById(id, function (err, doc) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      res.status(200).send(doc);
    }
  });
};

//find document by Id and update the details
module.exports.update_washer = (req, res) => {
  washerDetails
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      washerDetails.findOne({ _id: req.params.id }).then((washerdetails) => {
        res.json(washerdetails);
      });
    })
    .catch((err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
};

//Delete customer

//delete service ServicePlan
module.exports.delete_washer = (req, res) => {
  washerDetails
    .findByIdAndRemove({ _id: req.params.id })
    .then((washerdetails) => {
      res.send(washerdetails + "Document Deleted");
    })
    .catch((err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
};
