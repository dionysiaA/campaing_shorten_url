const router = require('express').Router();
var base58 = require('../../base58.js');
var config = require('../../config');

// grab the url model
var Url = require('../../db/models/url');
var Counter = require('../../db/models/counter');


router.post('/shorten', function(req, res, next){
  //https://www.renttherunway.com/shop/designers
  console.log(req.body.designer, req.body.dressName)
  var longUrl = `https://www.renttherunway.com/shop/designers/${req.body.designer}/${req.body.dressName}`;
  var shortUrl = '';
  Counter.findOrCreate({where: {_id: 'url_count'}, defaults: {seq: 1000}})
    .spread((counter, created) => {
      console.log(created, counter)
  })
  // check if url already exists in database
  // search for attributes
  Url.findOne({ where: {long_url: longUrl} })
    .then(url => {
      if (url){
        shortUrl = config.webhost + base58.encode(url._id);

        // the document exists, so we return it without creating a new entry
        res.send({'shortUrl': shortUrl});
      } else {
        // since it doesn't exist, let's go ahead and create it:

        Url.create({ long_url: longUrl })
          .then((newUrl) => {
            console.log('create url does not work', longUrl, newUrl._id)
            shortUrl = config.webhost + base58.encode(newUrl._id);
            console.log('here is the short url', shortUrl)
            res.send({'shortUrl': shortUrl});
          })


      }
  })
    .catch(next)
});

router.get('/:encoded_id', function(req, res, next){

  var base58Id = req.params.encoded_id;

  var id = base58.decode(base58Id);

  // check if url already exists in database
  Url.findOne({where: {_id: id}})
    .then((url) => {
      if (url) {
        res.redirect(url.long_url);
      } else {
        res.redirect(config.webhost);
      }
    })
    .catch(next)
});

router.use( (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})

module.exports = router;