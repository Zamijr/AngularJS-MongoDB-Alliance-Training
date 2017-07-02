var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  image: String,
  gender: String,
  personalSkill: String
});

module.exports = mongoose.model('users', UserSchema);
