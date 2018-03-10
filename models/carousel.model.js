var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carouselSchema = new Schema({
    image: String,
    title: String,
    link: {
        label: String,
        url: String
    },
    isActive: Boolean
});

module.exports = mongoose.model('Carousel', carouselSchema);