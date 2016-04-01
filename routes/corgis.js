var express = require('express');
var router = express.Router();

var Corgi = require('../models/corgi');


router.get('/', function(req, res, next) {
  Corgi.find({}, function(err, corgis) {
    console.log(corgis);
    res.render('index', {
      title: 'Corgis you Like',
      corgis: corgis
    });
  });

});

module.exports = router;
