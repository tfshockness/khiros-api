var Carousel = require('../models/carousel.model');

class CarouselRepository {

    add({image, title, link, isActive}){

        let newCarousel = new Carousel({
            image,
            title,
            link: {
                label: link.label,
                url: link.url
            },
            isActive
        });

        return newCarousel.save();
    }

    getAll(pageNumber, pageSize){
        return Carousel.find()
                        .skip((pageNumber - 1) * pageSize)
                        .limit(pageSize);
    }

    getById(id){
        return Carousel.findById(id);
    }

    //TODO: Implement Update
    updateById(id){
        return Carousel.update()
    }
}

// Returning just a singleton. Watch the behaviour on that.
module.exports = new CarouselRepository();