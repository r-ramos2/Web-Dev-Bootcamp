const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;

  const apiKey = "4c9428e2c43d457c9fd174411230903";
  const url =
    "https://api.weatherapi.com/v1/current.json?key=" +
    apiKey +
    "&q=" +
    query +
    "&aqi=no";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const city = weatherData.location.name;
      const country = weatherData.location.country;
      const temp = weatherData.current.temp_f;
      const descr = weatherData.current.condition.text;
      const icon = weatherData.current.condition.icon;

      console.log(city);
      console.log(temp);
      console.log(descr);

      res.write("<p>The weather is currently " + descr + "</p>");
      res.write(
        "<h1>The temperature in " +
          query +
          " is " +
          temp +
          " degrees Fahrenheit</h1>"
      );
      res.write("<img src=" + icon + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
