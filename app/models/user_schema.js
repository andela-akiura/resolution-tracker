var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var ResolutionSchema = new schema({
  resolution_title: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  priority: {type: Number, min: 0, max:2},
  year: {type: Number, min: 2015},
});

var UserSchema = new schema({
  name: String,
  username: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  }, 
  password: {
    type: String,
    required: true,
    select: false
  },
  //user's resolutions
  resolutions: [ResolutionSchema]
});

// hash password
UserSchema.pre('save', function(next) {
  var user = this;

  // hash only if new user or modified user
  if (!user.isModified('password')) return next();

  // hash
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

// compare a password with the db hash
UserSchema.methods.comparePassword = function(password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

exports.UserModel = mongoose.model('User', UserSchema);
exports.ResolutionModel = mongoose.model('Resolution', ResolutionSchema);