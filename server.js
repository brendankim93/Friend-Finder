var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Initializes Express 
var app = express();
var port = 3900;

//Allows Express app to begin parsing data 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Shows that app is listening on the designated port 
app.listen(port, function() {
    console.log("listening on port", port);
  });

