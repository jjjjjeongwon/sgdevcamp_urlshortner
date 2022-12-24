const crypto = require('crypto');
const salt = crypto.randomBytes(128).toString('base64');

class ShortLogic {
  static short(url) {
    const hashUrl = crypto
      .createHash('sha512')
      .update(url + salt)
      .digest('hex');
    return hashUrl.substring(0, 8);
  }
}

module.exports = ShortLogic;
