const Stripe = require("stripe");
const express = require("express");
const payment = express();
const port = 2000;
payment.use(express.json());
const stripe = Stripe(
  `sk_test_51J93PHSADvrq4VnPiCd9Iw6aD0PxnPSRAQGzlKvodSEFz18PUcaGxt9E4ujtcN88sOSWPDSEI5pMeVh6ebn9brcJ00QjDy0Vul`
);
payment.post("/payment", async (req, res) => {
  try {
    console.log(req.body);
    const amount = req.body.amount * 100;
    const email = req.body.email;
    const name = req.body.name;
    const service = req.body.service;
    await stripe.charges.create(
      {
        amount: amount,
        currency: "inr",
        source: "tok_mastercard",
        metadata: { order_id: "6565" },
      },
      function (err, result) {
        console.log(result.amount / 100);
        //console.log(err);
        res.send(
          `Payment Succesfull paid for service ${service} 
          Your Details ${name}
          ${email} for amount ${amount}
          you can check receipt at ${result.receipt_url}`
        );
      }
    );
  } catch (err) {
    console.log(err);
  }
});
module.exports = payment.listen(port, () => {
  console.log(`Payment Server is listening on ${port}`);
});
