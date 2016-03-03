var express = require("express");
var app = express();

// index
app.get("/", function(req, res) {
  res.send("API");
});

//start server
app.listen(3000);
