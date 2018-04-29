const { PAGE, SIZE } = require('../config/constants');

module.exports = class PostListViewModel {
    /**
     * 
     * @param {Array} postList - Array with Posts
     * @param {Number} page - Interger, Number of current Page
     * @param {Number} size - Integer, Number of Records in the Current Page
     */
    constructor(postList, page = PAGE, size = SIZE){
        this.data = {
            page,
            size,
            list: postList
        }
    }
}

