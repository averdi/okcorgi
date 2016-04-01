var express = require('express');
var router = express.Router();

var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  Corgi.findOneRandom({}, function(err, corgi) {
    res.render('show', {
      title: 'Corgis on the market',
      corgi: corgi
    });
  });
});

// router.post js to put liked dog into an array


  // push this into array of "liked" dogs that will display on /corgis


// router.post('/corgis/:id', function(req, res, next){



// both forms submit to this. need if/else for like or dislike forms.
// will need mongodb queries, findbyidandupdate
// });

module.exports = router;
