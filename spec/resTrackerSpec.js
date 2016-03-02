var request = require("request");

var home_url = "http://127.0.0.1:3000/"

describe("Resolution Tracker Server", function() {
  it("returns status code 200", function() {
    request.get(home_url, function(error, response, body) {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200);
    });
  });

  it("returns API", function() {
    request.get(home_url, function(error, response, body) {
      expect(body).toBe("API");
    });
  });
});
