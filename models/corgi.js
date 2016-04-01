// /models/user.js
var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

var corgiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  liked: Boolean,
  pictureURL: String,
  liked: Boolean,
  created_at: Date,
  updated_at: Date
});

corgiSchema.plugin(random);



var Corgi = mongoose.model('Corgi', corgiSchema);

// Make this available to our other files


module.exports = Corgi;



