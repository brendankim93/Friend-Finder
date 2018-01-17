var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Initializes Express 
var app = express();
var port = 3900;

//Allows Express app to begin parsing data 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Shows that app is listening on the designated port 
app.listen(port, function() {
    console.log("listening on port", port);
  });

