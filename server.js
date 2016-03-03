var express = require("express");
var app = express();
var exports = module.exports = {};

// index
app.get("/", function(req, res) {
  res.send("API");
});

//start server
var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

exports.closeServer = function() {
  server.close();
}
