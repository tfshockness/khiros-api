const carouselRepository = require('../repository/carousel.repository');

class CarouselServices {
    addCarousel({image, title, link, isActive}){
        return carouselRepository.add({image, title, link, isActive});
    }

    getAllCarousel(){
        return carouselRepository.getAll();
    }

    getCarouselById(id){
        return carouselRepository.getById(id);
    }
}

module.exports = new CarouselServices();