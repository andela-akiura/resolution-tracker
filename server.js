var express = require("express");
var app = express();
var exports = module.exports = {};
var router = express.Router();

app.use(express.static(path.join(__dirname, "public")));

//log all requests 
app.use(morgan("dev"));

// index
router.get("/", function(req, res) {
  res.json({
    API: "Resolution Tracker",
    version: "1",
    author: "github.com/andela-akiura",
    issues: "https://github.com/andela-akiura/resolution-tracker/issues"
  });
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// handle CORS 
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  next();
});

// all routes follow from the api :)
app.use("/api", router);

//start server
var server = app.listen(3000, function() {
  console.log("Listening on port 3000");
});

exports.closeServer = function() {
  server.close();
}
