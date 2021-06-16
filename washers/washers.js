const express = require("express");
const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("I m washer Welcome to Car wash system");
});

app.listen(port, () => {
  console.log(`Washer Server is running at ${port}`);
});
