//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { parse } = require("request/lib/cookies");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Display Home Page for a Get Request
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = Math.round(((weight * 703) / (height * height)) * 100) / 100;

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("Listening to port 3000");
});
