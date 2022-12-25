const router = require('express').Router();
const ShortUrl = require('../models/shortUrl');
const ShortLogic = require('../shortalgorithm/ShortLogic');

router.post('/', (req, res) => {
  ShortUrl.findOneByFull(req.body.full)
    .then((full) => {
      if (!full) return ShortUrlCheck(req, res);
      res.send(full);
    })
    .catch((err) => res.status(500).send(err));
});

router.get('/:shortUrl', (req, res) => {
  ShortUrl.findOneByShort(req.params.shortUrl)
    .then((url) => {
      if (!url) return res.status(404).send({ err: 'ShortUrl not found' });
      res.send(url);
    })
    .catch((err) => res.status(500).send(err));
});

function createShortUrl(req, res, shortUrl) {
  ShortUrl.create({ full: req.body.full, short: shortUrl })
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
}

function ShortUrlCheck(req, res) {
  const shortUrl = ShortLogic.short(req.body.full);
  ShortUrl.findOneByShort(shortUrl)
    .then((short) => {
      if (!short) return createShortUrl(req, res, shortUrl);
      return ShortUrlCheck(req, res);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = router;
