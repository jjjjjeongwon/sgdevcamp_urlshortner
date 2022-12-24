const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: { type: String, required: true },
  id: mongoose.Schema.Types.ObjectId,
});

shortUrlSchema.statics.create = function (payload) {
  const short = new this(payload);
  return short.save();
};

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
