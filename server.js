const express = require("express");
const app = express();

app.get("/add", function (req, res) {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let ans= parseInt(num1 + num2);
  res.send(num1 + "+" + num2 + "=" + ans);
});

app.get("/substration", function (req, res) {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let ans= parseInt(num1 - num2);
  res.send(num1 + "-" + num2 + "=" + ans);
});

app.get("/multiply", function (req, res) {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let ans= parseInt(num1 * num2);
  res.send(num1 + "*" + num2 + "=" + ans);
});

app.get("/divide", function (req, res) {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let ans= parseInt(num1 / num2);
  res.send(num1 + "/" + num2 + "=" + ans);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
