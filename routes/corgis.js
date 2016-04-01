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

//   Corgi.findbyIdAndUpdate = function(id, update, options, callback) {
//     if (liked === "like") {
//   }

// }

//     });

//     // Save the pirate
//     newPirate.save(function(err, pirate) {
//         if (err) console.log(err);

//         res.send('Corgi liked!');
//     });
});


module.exports = router;
