var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OK Corgi' });
});

// router.post js to put liked dog into an array
router.post('/corgis/:id', function(req, res, next){

// both forms submit to this. need if/else for like or dislike forms.
// will need mongodb queries, findbyidandupdate
});

module.exports = router;
