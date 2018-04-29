var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carouselSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    link: {
        label: { type: String, required: true },
        url: { type: String, required: true }
    },
    isActive: { type: Boolean, default: false }
});

module.exports = mongoose.model('Carousel', carouselSchema);