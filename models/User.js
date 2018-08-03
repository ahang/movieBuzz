const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: {
    unique: true,
    type: String
  },
  email: {
    unique: true,
    type: String,
    lowercase: true
  },
  password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
