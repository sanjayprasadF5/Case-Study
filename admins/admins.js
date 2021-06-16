const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am admin system");
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Admin server is listening on ${port}`);
});
