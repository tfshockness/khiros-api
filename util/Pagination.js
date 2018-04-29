const { PAGE, SIZE } = require('../config/constants'); 
class Pagination{
    /**
     * 
     * @param {Number} page  Current Page
     * @param {Number} size  Size of records for the current Page
     */
    static getPagination(page, size){
        return {
            page: ( !isNaN(page) ) ? parseInt(page) : PAGE,
            size: ( !isNaN(size) ) ? parseInt(size) : SIZE
        }
    }
}

module.exports = Pagination;