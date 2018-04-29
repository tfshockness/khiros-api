const carouselRepository = require('../repository/carousel.repository');
const { PAGE, SIZE } = require('../config/constants');

class CarouselServices {
    addCarousel({image, title, link, isActive}){
        return carouselRepository.add({image, title, link, isActive});
    }

    /**
     * 
     * @param {Number} pageNumber Current Page
     * @param {Number} PageSize  Size of records for the current Page
     */
    getAllCarousel(pageNumber = PAGE, PageSize = SIZE){
        return carouselRepository.getAll(pageNumber, PageSize);
    }

    getCarouselById(id){
        return carouselRepository.getById(id);
    }
}

module.exports = new CarouselServices();