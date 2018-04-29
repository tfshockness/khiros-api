const BaseListViewModel = require('./BaseListViewModel');

module.exports = class PostListViewModel extends BaseListViewModel{
    /**
     * 
     * @param {Array} postList - Array with Posts
     * @param {Number} page - Interger, Number of current Page
     * @param {Number} size - Integer, Number of Records in the Current Page
     */
    constructor(postList, page, size ){
        super(page, size);

        this.data.list = postList;
    }
    
}

