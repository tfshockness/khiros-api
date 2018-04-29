const { PAGE, SIZE } = require('../config/constants');

class BaseListViewModel{

    constructor(page = PAGE, size = SIZE){
        this.data = {
            page : page,
            size: size,
            list: []
        };
    }

}

module.exports = BaseListViewModel;