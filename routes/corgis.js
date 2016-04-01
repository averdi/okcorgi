var express = require('express');
var router = express.Router();

var Corgi = require('../models/corgi');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('whatever was automatically here before i changed it');
});

module.exports = router;
