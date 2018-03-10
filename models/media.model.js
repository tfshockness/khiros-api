const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var mediaSchema = new Schema({
    title: {type: String, required: true },
    url: {type: String, required: true },
    cover: String,
    isActive: {type: Boolean, default: true}
});

module.exports = mongoose.model('media', mediaSchema);