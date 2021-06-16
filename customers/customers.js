const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("I m Customer system");
});

const port = process.env.port || 2000;
app.listen(port, () => {
  console.log(`Customer server is running on port ${port}`);
});
