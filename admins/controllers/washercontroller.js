const Washer = require("../models/washermodel");
const washerDetails = require("../models/washermodel");
module.exports.getallwasher = (req, res) => {
  // Washer.find({}, (err, docs) => {
  //   if (err) {
  //     res.status(400).json(err);
  //   } else {
  //     res.status(200).json(docs);
  //   }
  // });
  Washer.find()
    .then((washer) => {
      res.status(200).send(washer);
    })
    .catch((err) => {
      if (err) {
        res.status(400).json(err);
      }
    });
};

module.exports.getwasherID = (req, res) => {
  washer.find({ isApprove: false }, (err, docs) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(docs);
    }
  });
};

module.exports.updatewasher = (req, res) => {
  const id = req.params.id;
  Washer.findByIdAndUpdate(
    id,
    { $set: { isApprove: true } },
    { new: true },
    (err, docs) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(docs);
      }
    }
  );
};

module.exports.deletewasher = (req, res) => {
  const id = req.params.id;
  Washer.findByIdAndRemove(id, function (err, docs) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(docs + "Document deleted");
    }
  });
};

module.exports.countwasher = function (req, res) {
  Washer.count({ isApprove: true }, (err, docs) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(docs);
    }
  });
};
// //Get all washer

// module.exports.getallwasher = (req, res) => {
//   Washer.find({})
//     .then((washer) => {
//       res.json(washer);
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json(err);
//       }
//     });
// };

// //Get single washer

// module.exports.getwasherID = (req, res) => {
//   Washer.findById(req.params.id)
//     .then((washer) => {
//       res.json(washer);
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json(err);
//       }
//     });
// };

// //delete washer

// module.exports.deletewasher = (req, res) => {
//   Washer.findByIdAndRemove(req.params.id)
//     .then((washer) => {
//       res.json(washer);
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json(err);
//       }
//     });
// };

// //update washer
// module.exports.updatewasher = (req, res) => {
//   Washer.findByIdAndUpdate(req.params.id)
//     .then((washer) => {
//       res.json(washer);
//     })
//     .catch((err) => {
//       if (err) {
//         res.status(400).json(err);
//       }
//     });
// };

// //post washer

// module.exports.postwasher = (req, res) => {
//   var newwasher = {
//     name: req.body.name,
//     emailID: req.body.emailID,
//     password: req.body.password,
//     isApprove: req.body.isApprove,
//   };

//   var washer = new Washer(newwasher);
//   washer
//     .save()
//     .then((washer) => {
//       res.json(washer);
//     })
//     .catch((err) => {
//       if (err) {
//         res.sendStatus(400);
//       }
//     });
// };
