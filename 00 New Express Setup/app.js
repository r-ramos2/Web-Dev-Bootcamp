//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//YOUR CODE HERE

app.listenerCount(3000, function () {
  console.log("Server is running on port 3000");
});
