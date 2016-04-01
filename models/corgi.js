// /models/user.js
var mongoose = require('mongoose');

var corgiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  liked: Boolean,
  pictureURL: String,
  liked: Boolean,
  created_at: Date,
  updated_at: Date
});


// js for getting random dogs ea time goes here.



var Corgi = mongoose.model('Corgi', corgiSchema);

// Make this available to our other files


module.exports = Corgi;



