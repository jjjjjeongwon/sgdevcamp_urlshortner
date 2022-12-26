const crypto = require('crypto');

class ShortLogic {
  static short(url) {
    const salt = crypto.randomBytes(128).toString('base64');

    const hashUrl = crypto
      .createHash('sha512')
      .update(url + salt)
      .digest('hex');
    return hashUrl.substring(0, 8);
  }
}

module.exports = ShortLogic;
