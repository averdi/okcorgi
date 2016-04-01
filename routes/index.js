var express = require('express');
var router = express.Router();

var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  Corgi.find({}, 'name description pictureURL', function(err, corgis) {
    if (err) console.log(err);
    console.log(corgis)
    res.render('index', {title: 'Corgis you Like'});
  });
});


// router.post js to put liked dog into an array
// router.post('/corgis/:id', function(req, res, next){

// both forms submit to this. need if/else for like or dislike forms.
// will need mongodb queries, findbyidandupdate
// });

module.exports = router;
