const BaseListViewModel = require('./BaseListViewModel');

module.exports = class MediaListViewModel extends BaseListViewModel{
    
    constructor(mediaList, page, size){
        super(page, size);
        this.data.list = mediaList;
    }
}