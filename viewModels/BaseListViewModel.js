const { PAGE, SIZE } = require('../config/constants');
class BaseListViewModel{
    constructor(page = PAGE, size = SIZE){
        this.page = page;
        this.size = size;
    }
}