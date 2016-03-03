var request = require("request");
var server = require("../server.js");

var root_url = "http://localhost:3000/"

describe("Resolution Tracker Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(root_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns \"API\"", function(done) {
      request.get(root_url, function(error, response, body) {
        expect(body).toBe("API");
        server.closeServer();
        done();
      });
    });
  });
});
