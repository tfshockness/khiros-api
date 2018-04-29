const BaseListViewModel = require('./BaseListViewModel');

module.exports = class CarouselListViewModel extends BaseListViewModel{
    
    /**
     * 
     * @param {Array} carouselList - Array with Carousels
     * @param {Number} page - Interger, Number of current Page
     * @param {Number} size - Integer, Number of Records in the Current Page
     */
    constructor(carouselList, page, size){
        super(page, size);
        
        this.data.list = carouselList;
    }

}