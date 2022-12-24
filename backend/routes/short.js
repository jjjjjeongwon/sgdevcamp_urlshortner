const router = require('express').Router();
const ShortUrl = require('../models/shortUrl');

router.post('/', (req, res) => {
    console.log(req.body);
    ShortUrl.create(req.body)
      .then(todo => res.send(todo))
      .catch(err => res.status(500).send(err));
  });

  module.exports = router;