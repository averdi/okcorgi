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


router.post('/', function(req, res, next) {
  res.send(req.body);
//     var id = req.body.id;
//     var liked = req.body.liked;

// if (liked === true) {
// Corgi.findbyIdAndUpdate(id, {liked: true}, '/')

// }

//     });

//     // Save the pirate
//     newPirate.save(function(err, pirate) {
//         if (err) console.log(err);

//         res.send('Corgi liked!');
//     });
});


module.exports = router;
