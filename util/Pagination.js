
class Pagination{
    /**
     * 
     * @param {Number} page  Current Page
     * @param {Number} size  Size of records for the current Page
     */
    static getPagination(page, size){
        return {
            page: ( !isNaN(page) ) ? parseInt(page) : undefined,
            size: ( !isNaN(size) ) ? parseInt(size) : undefined
        }
    }
}

module.exports = Pagination;