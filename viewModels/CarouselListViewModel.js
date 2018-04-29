const BaseListViewModel = require('./BaseListViewModel');

class CarouselListViewModel extends BaseListViewModel{
    
    constructor(carouselList, page, size){
        super(page, size);
        this.data = {
            page = this.page,
            size = this.size,
            list: carouselList
        }
    }
}