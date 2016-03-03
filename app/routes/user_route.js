var User = require('../models/user_schema').UserModel;
var Resolution = require('../models/user_schema').ResolutionModel;
var uuid = require('node-uuid');
var supersecret = 'api_v1$randomsecretcode';

exports.postUser = function(req, res) {
  var user = new User();
  user.name = req.body.name;
  user.username = req.body.username;
  user.password = req.body.password;

  // save user
  user.save(function(err) {
    if (err) {
      // duplicate entry
      if (err.code = 11000) {
        return res.json({
          success: false,
          message: 'A user with that username already exists.'
        });
      } else {
        return res.send(err);
      }
    }
    res.json({
      message: 'user successfully created.'
    });
  });
};

exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
};