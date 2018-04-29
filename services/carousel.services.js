const carouselRepository = require('../repository/carousel.repository');

class CarouselServices {
    addCarousel({image, title, link, isActive}){
        return carouselRepository.add({image, title, link, isActive});
    }

    /**
     * 
     * @param {Number} pageNumber Current Page
     * @param {Number} PageSize  Size of records for the current Page
     */
    getAllCarousel(pageNumber , PageSize ){
        return carouselRepository.getAll(pageNumber, PageSize);
    }

    getCarouselById(id){
        return carouselRepository.getById(id);
    }
}

module.exports = new CarouselServices();