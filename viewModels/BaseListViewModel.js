const { PAGE, SIZE } = require('../config/constants');

class BaseListViewModel{

    constructor(page = PAGE, size = SIZE){
        this.data = {
            page : page,
            size: size
        };
    }

}

module.exports = BaseListViewModel;