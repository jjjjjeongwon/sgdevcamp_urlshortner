const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        require: true
    },
    short: {
        type: String,
        require: true
    }
})

const Short = mongoose.model('ShortUrl', shortUrlSchema);
module.exports = {Short};