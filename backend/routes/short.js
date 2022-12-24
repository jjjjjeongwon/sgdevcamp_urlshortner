const router = require('express').Router();
const ShortUrl = require('../models/shortUrl');
const ShortLogic = require('../shortalgorithm/ShortLogic');

router.post('/', (req, res) => {
  //full 체크
  const shortUrl = ShortLogic.short(req.body.full);
  
  //shorturl 체크

  console.log(shortUrl);
  ShortUrl.create({ full: req.body.full, short: shortUrl })
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;