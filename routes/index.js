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
// router.post('/corgis/:id', function(req, res, next){

  router.post('/', function(req, res, next) {
    var name = req.body.name;
    var catchphrase = req.body.catchphrase;

    var newPirate = Pirate({
        name: name,
        catchphrase: catchphrase,
    });

    // Save the pirate
    newPirate.save(function(err, pirate) {
        if (err) console.log(err);

        res.send('Pirate created!');
    });
});

router.get('/new', function(req, res, next) {
    res.render('corgis/new', { title: 'Corgis you like' });
});

// both forms submit to this. need if/else for like or dislike forms.
// will need mongodb queries, findbyidandupdate
// });

module.exports = router;
