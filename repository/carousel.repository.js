var Carousel = require('../models/carousel.model');

class CarouselRepository {

    async add({image, title, link, isActive}){

        let newCarousel = new Carousel({
            image,
            title,
            link: {
                label: link.label,
                url: link.url
            },
            isActive
        });

        const res = await newCarousel.save(err => {
            if(err) throw err;
        });

        return res;
    }

    getAll(){
        return Carousel.find();
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